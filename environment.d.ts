// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // neon databse url
      DATABASE_URL: string;
    }
  }
}
