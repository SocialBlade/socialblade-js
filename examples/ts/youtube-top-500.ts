import SocialBlade, { YouTubeTop } from '../../lib'; // from "socialblade"

const client = new SocialBlade(
  process.env.SOCIALBLADE_CLIENT_ID!,
  process.env.SOCIALBLADE_ACCESS_TOKEN!,
);

// Costs 10 credits per page / i.e. per 100
const top = async (total: number): Promise<string[]> => {
  const pages: number = Math.ceil(total / 100);
  const results: YouTubeTop[][] = [];

  for (let index = 0; index < pages; index++) {
    results.push(await client.youtube.top('subscribers', index + 1));
  }

  // Convert all the Channels into an array of YouTube Links
  return results
    .reduce((a: YouTubeTop[], v: YouTubeTop[]) => a.concat(v))
    .map((channel) => `https://youtube.com/channel/${channel.id.id}`);
};

top(500).then(console.log).catch(console.error);
