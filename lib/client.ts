import { Options } from './interfaces/options';
import { Matrix } from './matrix';
import { Platform, PlatformWithTop } from './platform';

import {
  InstagramTop,
  InstagramTopFilters,
  InstagramUser,
} from './interfaces/instagram';
import {
  FacebookTop,
  FacebookTopFilters,
  FacebookUser,
} from './interfaces/facebook';
import {
  YouTubeTop,
  YouTubeTopFilters,
  YouTubeUser,
} from './interfaces/youtube';
import {
  TwitterTop,
  TwitterTopFilters,
  TwitterUser,
} from './interfaces/twitter';
import { TwitchTop, TwitchTopFilters, TwitchUser } from './interfaces/twitch';
import { TikTokTop, TikTokTopFilters, TikTokUser } from './interfaces/tiktok';
import { DailyMotionUser } from './interfaces/dailymotion';
import { StoryFireUser } from './interfaces/storyfire';
import { DLiveUser } from './interfaces/dlive';
import { TrovoUser } from './interfaces/trovo';

export default class SocialBlade {
  private api: Matrix;
  public instagram: PlatformWithTop<
    InstagramUser,
    InstagramTop,
    InstagramTopFilters
  >;
  public facebook: PlatformWithTop<
    FacebookUser,
    FacebookTop,
    FacebookTopFilters
  >;
  public youtube: PlatformWithTop<YouTubeUser, YouTubeTop, YouTubeTopFilters>;
  public twitter: PlatformWithTop<TwitterUser, TwitterTop, TwitterTopFilters>;
  public twitch: PlatformWithTop<TwitchUser, TwitchTop, TwitchTopFilters>;
  public tiktok: PlatformWithTop<TikTokUser, TikTokTop, TikTokTopFilters>;
  public dailymotion: Platform<DailyMotionUser>;
  public storyfire: Platform<StoryFireUser>;
  public dlive: Platform<DLiveUser>;
  public trovo: Platform<TrovoUser>;

  constructor(client_id: string, access_token: string, options: Options = {}) {
    this.api = new Matrix(client_id, access_token, options);

    this.instagram = new PlatformWithTop<
      InstagramUser,
      InstagramTop,
      InstagramTopFilters
    >(this.api, 'instagram', 'followers');
    this.youtube = new PlatformWithTop<
      YouTubeUser,
      YouTubeTop,
      YouTubeTopFilters
    >(this.api, 'youtube', 'subscribers');
    this.facebook = new PlatformWithTop<
      FacebookUser,
      FacebookTop,
      FacebookTopFilters
    >(this.api, 'facebook', 'likes');
    this.twitter = new PlatformWithTop<
      TwitterUser,
      TwitterTop,
      TwitterTopFilters
    >(this.api, 'twitter', 'followers');
    this.twitch = new PlatformWithTop<TwitchUser, TwitchTop, TwitchTopFilters>(
      this.api,
      'twitch',
      'followers',
    );
    this.tiktok = new PlatformWithTop<TikTokUser, TikTokTop, TikTokTopFilters>(
      this.api,
      'tiktok',
      'followers',
    );
    this.dailymotion = new Platform<DailyMotionUser>(this.api, 'dailymotion');
    this.storyfire = new Platform<StoryFireUser>(this.api, 'storyfire');
    this.dlive = new Platform<DLiveUser>(this.api, 'dlive');
    this.trovo = new Platform<TrovoUser>(this.api, 'trovo');
  }
}
