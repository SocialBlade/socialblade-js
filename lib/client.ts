import { Options } from './interfaces/options';
import { Matrix } from './matrix';
import { Platform, PlatformWithTop } from './platform';

import { YouTubeTop, YouTubeTopFilters, YouTubeUser } from './interfaces/youtube';
import { TwitterTop, TwitterTopFilters, TwitterUser } from './interfaces/twitter';
import { TwitchTop, TwitchTopFilters, TwitchUser } from './interfaces/twitch';
import { TikTokTop, TikTokTopFilters, TikTokUser } from './interfaces/tiktok';
import { DLiveUser } from './interfaces/dlive';
import { StoryFireUser } from './interfaces/storyfire';

export default class SocialBlade {
  private api: Matrix;
  public youtube: PlatformWithTop<YouTubeUser, YouTubeTop, YouTubeTopFilters>;
  public twitter: PlatformWithTop<TwitterUser, TwitterTop, TwitterTopFilters>;
  public twitch: PlatformWithTop<TwitchUser, TwitchTop, TwitchTopFilters>;
  public tiktok: PlatformWithTop<TikTokUser, TikTokTop, TikTokTopFilters>;
  public dlive: Platform<DLiveUser>;
  public storyfire: Platform<StoryFireUser>;

  constructor(client_id: string, access_token: string, options: Options = {}) {
    this.api = new Matrix(client_id, access_token, options);

    this.youtube = new PlatformWithTop<YouTubeUser, YouTubeTop, YouTubeTopFilters>(this.api, 'youtube', 'subscribers');
    this.twitter = new PlatformWithTop<TwitterUser, TwitterTop, TwitterTopFilters>(this.api, 'twitter', 'followers');
    this.twitch = new PlatformWithTop<TwitchUser, TwitchTop, TwitchTopFilters>(this.api, 'twitch', 'followers');
    this.tiktok = new PlatformWithTop<TikTokUser, TikTokTop, TikTokTopFilters>(this.api, 'tiktok', 'followers');
    this.dlive = new Platform<DLiveUser>(this.api, 'dlive');
    this.storyfire = new Platform<StoryFireUser>(this.api, 'storyfire');
  }
}
