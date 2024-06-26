import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
	js.configs.recommended,

	{
		plugins: {
			perfectionist,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"no-duplicate-imports": "error",
			"no-unused-vars": "error",
			"no-console": "error",
			"simple-import-sort/imports": "error",
		},
	},
];
