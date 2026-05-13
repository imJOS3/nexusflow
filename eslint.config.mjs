import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/build/**"],
  },

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      prettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "prettier/prettier": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];