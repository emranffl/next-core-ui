import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"
import packageJson from "./package.json" assert { type: "json" }
import tailwindcss from "tailwindcss"
import nodePolyfills from "rollup-plugin-polyfill-node"
import gzipPlugin from "rollup-plugin-gzip"
import scss from "rollup-plugin-scss"
import autoprefixer from "autoprefixer"
import preserveDirectives from "rollup-plugin-preserve-directives"

const extensions = [".js", ".jsx", ".ts", ".tsx"]

export default [
	{
		input: "src/index.ts",
		output: [
			// {
			// 	file: packageJson.main,
			// 	format: "cjs",
			// 	sourcemap: true,
			// 	exports: "named",
			// },
			{
				// file: packageJson.module,
				dir: "dist",
				format: "esm",
				sourcemap: true,
				assetFileNames: "[name][extname]",
				preserveModules: true,
				preserveModulesRoot: 'src',
			},
		],
		onwarn(warning, warn) {
			// skip certain warnings
			// console.log(warning.code);
			if (
				warning.code === "UNUSED_EXTERNAL_IMPORT" ||
				warning.code === "MODULE_LEVEL_DIRECTIVE"
			)
				return

			// throw on others
			// Using Object.assign over new Error(warning.message) will make
			// the CLI print additional information such as warning location
			// and help url.
			if (warning.code === "MISSING_EXPORT")
				throw Object.assign(new Error(), warning)

			// Use default for everything else
			warn(warning)
		},
		plugins: [
			gzipPlugin.default(),
			peerDepsExternal(),
			resolve({ extensions, browser: true, jsnext: true, module: true }),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				declaration: true,
				declarationDir: "dist/types",
			}),
			babel({
				babelHelpers: "runtime",
				extensions,
				exclude: "node_modules/**",
				include: ["src/**/*"],
				plugins: ["@babel/plugin-transform-runtime"],
				presets: ["@babel/preset-env", "@babel/preset-react"],
			}),
			postcss({
				extract: true,
				modules: true,
				plugins: [tailwindcss("./tailwind.config.js")],
			}),
			terser({ compress: { directives: false } }),
			nodePolyfills({
				include: ["src/**/*"],
				exclude: ["node_modules/**"],
				sourceMap: true,
			}),
			scss({
				output: "dist/index.css",
				include: ["src/scss/**/*.scss"],
				sass: require("sass"),
				failOnError: true,
				sourceMap: true,
				outputStyle: "compressed",
				processor: () => postcss([autoprefixer()]),
				// includePaths: [
				//   path.join(__dirname, "../../node_modules/"),
				//   "node_modules/",
				// ],
			}),
			preserveDirectives.default({ supressPreserveModulesWarning: true }),
		],
		external: ["react", "react-dom", "styled-components", "node"],
	},
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		external: [/\.css$/],
		plugins: [dts.default()],
	},
]
