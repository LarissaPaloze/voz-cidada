/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_CLIENT_ID: string;
      // outras variáveis de ambiente que você usar
    }
  }