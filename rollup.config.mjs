import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
// import flatDts from "rollup-plugin-flat-dts"
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"
import packageJson from "./package.json" assert { type: "json" };

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
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve({ extensions }),
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
			}),
			terser(),
			// flatDts(),
		],
		external: ["react", "react-dom", "styled-components"],
	},
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		external: [/\.css$/],
		plugins: [dts.default()],
	},
]
