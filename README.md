# Social Blade API in TypeScript [<img align="right" src="https://socialblade.com/images/media/red/2.png">](https://socialblade.com/b)

[![npm](https://img.shields.io/npm/v/socialblade.svg)](https://www.npmjs.com/package/socialblade)
![Discord](https://img.shields.io/discord/125022847562285056?color=7289DA&label=Discord)

---

### API Information
Our API allows you to take the power of the Social Blade website and intergrate it directly into your internal systems.

You gain access to the same public statistical information that is on the website along with our toplists, rankings, and more as we keep expanding it's features!  
[<img align="right" height="40px" src="https://cdn.t.pics/socialblade-get-started.png">](https://socialblade.com/business-api)

## Install
```bash
npm install --save socialblade
```

> **Important**: Library does not force any fetch polyfills, If you don't already have a fetch polyfill we recommend using `isomorphic-unfetch` like the tests use.

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
client.youtube.user('socialblade').then(console.log);
```

##### [Code Examples](examples)

## Troubleshooting
If you find an issue with this library feel free to open an issue here on GitHub, or submit a PR and others! 😀  
If it's an issue when the API open a [support ticket](https://support.socialblade.com).
