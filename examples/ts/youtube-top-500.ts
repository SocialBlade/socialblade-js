import SocialBlade, { YouTubeTop } from '../../lib'; // from "socialblade"
import 'isomorphic-unfetch';

const client = new SocialBlade(process.env.SOCIALBLADE_CLIENT_ID!, process.env.SOCIALBLADE_ACCESS_TOKEN!);

// Costs 10 credits per page / i.e. per 100
const top = async (total: number): Promise<string[]> => {
  // Number of Tops to Pages
  const pages: number = Math.ceil(total / 100);

  // Prepare to make request for the specified pages.
  const promises: Promise<YouTubeTop[]>[] = [...Array(pages).keys()].map((index) =>
    client.youtube.top('subscribers', index + 1, pages),
  );

  // Wait for all the pages to be fetch
  const results: YouTubeTop[][] = await Promise.all(promises);

  // Convert all the Channels into an array of YouTube Links
  return results
    .reduce((a: YouTubeTop[], v: YouTubeTop[]) => a.concat(v))
    .map((channel) => `https://youtube.com/channel/${channel.id.id}`);
};

top(500).then(console.log).catch(console.error);
