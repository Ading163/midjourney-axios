import "dotenv/config";
import { Midjourney } from "../src";
/**
 *
 * a simple example of using the imagine api with ws
 * ```
 * npx tsx example/imagine-ws.ts
 * ```
 */

const SERVER_ID = '1088846465302016160' // Midjourney 服务 ID
const CHANNEL_ID = '1113016433224458240' // Midjourney 频道 ID
const SALAI_TOKEN = 'MTA4NzkzMTE3MDcyMjkzODg5MA.GUM8j4.reQhdz5iBgn8U9f6J7N98JozcRAPbJ74drjGQo' // Midjourney 服务 Token
const HUGGINGFACE_TOKEN = "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"
const Limit = 100
const MaxWait = 3

//初始化
const client = new Midjourney({
  ServerId: SERVER_ID,
  ChannelId: CHANNEL_ID,
  SalaiToken: SALAI_TOKEN,
  Debug: true,
  SessionId: SALAI_TOKEN,
  Limit: Limit,
  MaxWait: MaxWait
});



async function main() {
  const client = new Midjourney({
    ServerId: SERVER_ID,
    ChannelId: CHANNEL_ID,
    SalaiToken: SALAI_TOKEN,
    HuggingFaceToken: HUGGINGFACE_TOKEN,
    Debug: true,
    Ws: true,
  });
  await client.init();
  const msg = await client.Imagine(
    "A little white dog",
    (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    }
  );
  console.log({ msg });
}
main()
  .then(() => {
    console.log("finished");
    process.exit(0);
  })
  .catch((err) => {
    console.log("finished");
    console.error(err);
    process.exit(1);
  });
