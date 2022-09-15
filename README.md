# Social Blade API in TypeScript [<img align="right" src="https://socialblade.com/images/media/red/2.png">](https://socialblade.com/b)

[![npm](https://img.shields.io/npm/v/socialblade.svg)](https://www.npmjs.com/package/socialblade)
![Discord](https://img.shields.io/discord/125022847562285056?color=7289DA&label=Discord)

---

### API Information
Our API allows you to take the power of the Social Blade website and integrate it directly into your internal systems.

You gain access to the same public statistical information that is on the website along with our toplists, rankings, and more as we keep expanding its features!  
[<img align="right" height="40px" src="https://cdn.t.pics/socialblade-get-started.png">](https://socialblade.com/business-api)

## Install
```bash
# with npm
npm install --save socialblade isomorphic-unfetch

# with yarn
yarn add socialblade isomorphic-unfetch
```

`socialblade-js` does not include its own `fetch` polyfill. The tests use `isomorphic-unfetch` but you can use another if you'd like.

## Usage
Import the library and a `fetch` polyfill into your project and construct a new client which will be used to access the API.  

#### TypeScript
```ts
import fetch from "isomorphic-unfetch";
import SocialBlade, { YouTubeUser } from 'socialblade';

const client: SocialBlade = new SocialBlade(SOCIALBLADE_CLIENT_ID, SOCIALBLADE_ACCESS_TOKEN);

// Get a YouTube User
const sbUser: YouTubeUser = await client.youtube.user('socialblade');
```

#### ES6+
```js
const fetch = require("isomorphic-unfetch");
const SocialBlade = require("socialblade");

const client = new SocialBlade(SOCIALBLADE_CLIENT_ID, SOCIALBLADE_ACCESS_TOKEN);

// Get a YouTube User
client.youtube.user('socialblade').then(console.log);
```

##### [Code Examples](examples)

## Troubleshooting
If you find an issue with this library, feel free to open an issue here on GitHub, or submit a PR! 😀
If it's an issue with the API, open a [support ticket](https://support.socialblade.com).
