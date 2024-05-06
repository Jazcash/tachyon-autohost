module.exports = {
    extends: ["./node_modules/jaz-ts-utils/.eslintrc.js", "plugin:require-extensions/recommended"],
    env: {
        node: true,
        browser: false,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    plugins: ["import", "node"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
    },
    rules: {
        // Rules should only be added here for testing temporarily and should eventually be moved into jaz-ts-utils to ensure consistency across projects
        "import/extensions": ["error", "ignorePackages"],
    },
};
