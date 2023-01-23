const SocialBlade = require('../../dist'); // "socialblade"

const client = new SocialBlade(
  process.env.SOCIALBLADE_CLIENT_ID,
  process.env.SOCIALBLADE_ACCESS_TOKEN,
);

// Costs 10 credits per page / i.e. per 100
const top = async (total) => {
  const pages = Math.ceil(total / 100);
  const results = [];

  for (let index = 0; index < pages; index++) {
    results.push(await client.youtube.top('subscribers', index + 1));
  }

  // Convert all the Channels into an array of YouTube Links
  return results
    .reduce((a, v) => a.concat(v))
    .map((channel) => `https://youtube.com/channel/${channel.id.id}`);
};

top(500).then(console.log).catch(console.error);
