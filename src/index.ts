import { config } from "@/config.js";
import { TachyonClient } from "tachyon-client";

const client = new TachyonClient(config);

const token = await client.autohostAuth();

await client.connect(token.accessToken, true);

const slaveResponse = await client.request("autohost", "slave", {
    maxBattles: 4,
});

console.log(slaveResponse);
