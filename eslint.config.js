import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
	{
		plugins: {
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
