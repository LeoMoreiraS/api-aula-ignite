import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

export default {
  bail: true,

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),

  preset: "ts-jest",

  setupFiles: ["<rootDir>/.env.js"],
};
