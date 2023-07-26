declare namespace NodeJS {
  interface ProcessEnv {
    APP_PORT: number
    DB_URI: string;
    PASSWORD_SALT_ROUNDS: string;
    JWT_SECRET: string;
  }
}
