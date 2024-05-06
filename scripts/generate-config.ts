import * as fs from "node:fs";

if (!fs.existsSync("config.ts")) {
    await fs.promises.copyFile("config.example.ts", "config.ts");
}
