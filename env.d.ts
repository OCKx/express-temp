
declare namespace NodeJS {
    interface ProcessEnv {
      STATIC_FILES_PATH: string;
      HOST: string;
      DATABASE_URL: string;
      JWT_SECRET_KEY: string;
      PORT: number;
      NODE_ENV: string;
    }
  }
  