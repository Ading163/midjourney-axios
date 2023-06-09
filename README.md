# midjourney-axios

Node.js client for the unofficial MidJourney API.


## illustrate
```bash
兼容 nodejs 18以下版本 使用 axios 代替 fetch 
```

## Install

npm

```bash
npm i midjourney-axios
```

yarn

```bash
yarn add midjourney-axios
```

## Usage

```typescript
import { Midjourney } from "midjourney";
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    Debug: true,
    Ws:true,
  });
const msg = await client.Imagine("A little pink elephant", (uri: string) => {
  console.log("loading", uri);
});
console.log({ msg });
```

## Example

To run the included example, you must have [Node.js](https://nodejs.org/en/) installed. Then, run the following commands in the root directory of this project:

1. clone the repository

```bash
git clone git@github.com:Ading163/midjourney-axios.git
cd midjourney-axios
```

2. install dependencies

```bash
yarn
# or npm
npm install
```

3. set the environment variables
   [How to get your Discord SALAI_TOKEN:](https://www.androidauthority.com/get-discord-token-3149920/)

```bash
export SERVER_ID="108250087147832934"
export CHANNEL_ID="109489299228171884"
export SALAI_TOKEN="your-salai-token"
```

Then, run the example with the following command:

```bash
npx tsx example/imagine-ws.ts
```

```bash
npx tsx example/upscale-ws.ts
```

```bash
npx tsx example/variation-ws.ts
```
