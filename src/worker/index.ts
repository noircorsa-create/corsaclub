/// <reference types="../worker-configuration.d.ts" />
import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

export default app;
