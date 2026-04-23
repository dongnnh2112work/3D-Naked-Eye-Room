import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "3d-hand-viewer.html");
    const html = await readFile(filePath, "utf8");

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=0, must-revalidate"
      }
    });
  } catch (error) {
    return new Response(
      `Cannot read 3d-hand-viewer.html: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 }
    );
  }
}
