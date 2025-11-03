// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ /* baseDirectory: process.cwd() */ });

export default [
  ...compat.config({
    extends: ["eslint:recommended"],
  }),
];