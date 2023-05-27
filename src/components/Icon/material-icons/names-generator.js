import { readFileSync, writeFile } from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const moduleURL = new URL(import.meta.url);
const filePath = fileURLToPath(moduleURL);
const directoryPath = dirname(filePath);

const materialIconsCssFile = readFileSync(
	"node_modules/material-icons/css/material-icons.css",
	"utf-8"
)

const iconNames = []
const regexToExtractNames = /\.(.+?)::/g
let match
while ((match = regexToExtractNames.exec(materialIconsCssFile)) !== null) {
	iconNames.push(match[1])
}

const fileName = directoryPath + "/names.ts"
const fileContent = `export const MATERIAL_ICON_NAMES = [
  "${iconNames.join('",\n  "').replace(/-/g, "_")}"
] as const`

writeFile(fileName, fileContent, err => {
	if (err) {
		console.error(err)
		return
	}
	console.log("Material Icon names saved to " + fileName)
})
