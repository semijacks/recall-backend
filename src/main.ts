import { Hono } from "@hono/hono";
import "@std/dotenv/load";

const app = new Hono();

const PORT = Deno.env.get("PORT") || 4000;

app.get("/", (c) => {
  try {
    return c.json({
      data: [],
    });
  } catch (error) {
    return c.json({ error });
  }
});

Deno.serve({ port: +PORT }, app.fetch);

if (Deno.env.get("NODE_ENV") === "development") {
  console.log(`Server is running on http://localhost:${PORT}`);
}
