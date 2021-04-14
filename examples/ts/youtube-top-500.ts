import SocialBlade, { YouTubeUser } from 'socialblade';

const client: SocialBlade = new SocialBlade(SOCIALBLADE_CLIENT_ID, SOCIALBLADE_ACCESS_TOKEN);

// Get a YouTube User
const sbUser: YouTubeUser = await client.youtube.user('socialblade');

const SocialBlade = require("socialblade");

const client = new SocialBlade(SOCIALBLADE_CLIENT_ID, SOCIALBLADE_ACCESS_TOKEN);

// Get a YouTube User
client.youtube.user('socialblade').then(console.log);

  for (let index = 0; index < pages; index++) {
    results.push(await client.youtube.top('subscribers', index + 1));
  }

  // Convert all the Channels into an array of YouTube Links
  return results
    .reduce((a: YouTubeTop[], v: YouTubeTop[]) => a.concat(v))
    .map((channel) => `https://youtube.com/channel/${channel.id.id}`);
};

top(500).then(console.log).catch(console.error);
