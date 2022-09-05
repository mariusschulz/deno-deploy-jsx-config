import { serve } from "https://deno.land/std@0.154.0/http/server.ts";
import * as React from "https://esm.sh/react@18.2.0";
import { renderToReadableStream } from "https://esm.sh/react-dom@18.2.0/server";

await serve(
  async () => {
    const stream = await renderToReadableStream(<div>Hello World!</div>);
    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  { port: 3000 },
);
