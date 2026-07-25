import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  prettier,
];
