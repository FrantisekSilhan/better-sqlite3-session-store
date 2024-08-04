declare module "better-sqlite3-session-store" { // Taken from https://github.com/attestate/better-sqlite3-session-store/blob/500da913fcaf44b3c9a851aa7fbe6187dca1c023/src/index.d.ts
import express from "express"
import { Store, SessionData } from "express-session"

// Adapted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express-session/index.d.ts
declare class SqliteStore extends Store {
  constructor(options: any)
  regenerate(req: express.Request, callback: (err?: any) => any): void;
  load(sid: string, callback: (err: any, session?: SessionData) => any): void;
  createSession(req: express.Request, session: SessionData): Session & SessionData;
  get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
  set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
  destroy(sid: string, callback?: (err?: any) => void): void;
  all?(callback: (err: any, obj?: SessionData[] | { [sid: string]: SessionData; } | null) => void): void;
  length?(callback: (err: any, length: number) => void): void;
  clear?(callback?: (err?: any) => void): void;
  touch?(sid: string, session: SessionData, callback?: () => void): void;

  startInterval(): void;
  clearExpiredSessions(): void;
  createDb(): void;
}

declare function createSqliteStore(session: { Store: typeof Store }): typeof SqliteStore;
export = createSqliteStore
}
