import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    // templates/ holds {{FN}}-token stubs that are not valid TS until scaffolded.
    exclude: [...configDefaults.exclude, "templates/**"],
  },
});
