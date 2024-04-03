// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // neon databse url
      DATABASE_URL: string;

      // uploading api key and app id
      UPLOADTHING_SECRET: string;
      UPLOADTHING_APP_ID: string;

      // app base url
      NEXT_PUBLIC_BASE_URL: string;

      // livekit api keys and public url
      LIVEKIT_API_KEY: string;
      LIVEKIT_API_SECRET: string;
      NEXT_PUBLIC_LIVEKIT_URL: string;
    }
  }
}
