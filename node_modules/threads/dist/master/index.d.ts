import { Worker as WorkerType } from "../types/master";
export { FunctionThread, ModuleThread } from "../types/master";
export { Pool } from "./pool";
export { spawn } from "./spawn";
export { Thread } from "./thread";
export declare type Worker = WorkerType;
/** Worker implementation. Either web worker or a node.js Worker class. */
export declare const Worker: typeof import("../types/master").WorkerImplementation;
