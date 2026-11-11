
import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/**", "coverage/**"]},
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn", //Variables que no se utilizan
      "no-undef": "error", // Detecta variables que se utilizan sin ser declaradas
      "no-var": "error", // Evita utilizar var
      "curly": "error", //Obliga al uso de llaves en estructuras como if o for
      "no-duplicate-imports": "error" // Evita importar varias veces desde el mismo módulo
    }
  }
];
