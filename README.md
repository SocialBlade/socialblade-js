# Social Blade API in TypeScript [<img align="right" src="https://socialblade.com/images/media/red/2.png">](https://socialblade.com/b)

[![npm](https://img.shields.io/npm/v/socialblade.svg)](https://www.npmjs.com/package/socialblade)
[![Social Blade Discord](https://img.shields.io/discord/125022847562285056.svg?label=Social%20Blade%20Discord%20(Not%20for%20Support)&colorB=c84329&maxAge=3600)](https://socialblade.com/discord)

---

### Information [<img align="right" style="margin-top: -10px" height="40px" src="https://cdn.t.pics/socialblade-get-started.png">](https://socialblade.com/business-api)

Our API allows you to take the power of the Social Blade website and intergrate it directly into your internal systems.

You gain access to the same public statistical information that is on the website along with our toplists, rankings, and more as we keep expanding it's features!

---

## Install
```bash
npm install --save socialblade
```

## Usage
Import the library into your project and construct a new client which will be used to access the API.  

#### TypeScript
```ts
import SocialBlade, { YouTubeUser } from 'socialblade';

const client: SocialBlade = new SocialBlade(SOCIALBLADE_CLIENT_ID, SOCIALBLADE_ACCESS_TOKEN);

// Get a YouTube User
const sbUser: YouTubeUser = await client.youtube.user('socialblade');
```

#### ES6+
```js
const SocialBlade = require("socialblade");

const client = new SocialBlade(SOCIALBLADE_CLIENT_ID, SOCIALBLADE_ACCESS_TOKEN);

// Get a YouTube User
await client.youtube.user('socialblade').then(console.log);
```

## Examples
_Examples coming soon._

## Troubleshooting
If you find an issue with this library feel free to open an issue here on GitHub, or submit a PR and others! 😀  
If it's an issue when the API open a [support ticket](https://support.socialblade.com).
