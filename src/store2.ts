import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";
// (optional, define types for TypeScript)
type Todo = { completed: boolean, title: string };
export const store = syncedStore({ todos: [] as Todo[], fragment: "xml" });

const doc = getYjsDoc(store);

// Start a y-websocket server, e.g.: HOST=localhost PORT=1234 npx y-websocket-server

const wsProvider = new WebsocketProvider("ws://localhost:3000", "my-roomname", doc);