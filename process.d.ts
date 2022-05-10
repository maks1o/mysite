declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    DATABASE_URL: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GITHUB_ID: string
    GITHUB_SECRET: string
  }
}
