import { readFileSync, writeFile } from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"
const moduleURL = new URL(import.meta.url)
const filePath = fileURLToPath(moduleURL)
const directoryPath = dirname(filePath)

const bootstrapIconsCssFile = readFileSync(
	"node_modules/bootstrap-icons/font/bootstrap-icons.css",
	"utf-8"
)

const iconNames = []
const regexToExtractNames = /\.(.+?)::/g
let match
while ((match = regexToExtractNames.exec(bootstrapIconsCssFile)) !== null) {
	if (match[1] !== "bi") iconNames.push(match[1])
}

const fileName = directoryPath + "/names.ts"
const fileContent = `export const BOOTSTRAP_ICON_NAMES = [
  "${iconNames.join('",\n  "')}"
] as const`

writeFile(fileName, fileContent, err => {
	if (err) {
		console.error(err)
		return
	}
	console.log("Bootstrap Icon names saved to " + fileName)
})
