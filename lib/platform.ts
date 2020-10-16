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
import { Matrix } from './matrix';
import { TwitchTop, TwitchTopFilters, TwitchUser } from './interfaces/twitch';
import { TikTokTop, TikTokTopFilters, TikTokUser } from './interfaces/tiktok';

export type YouTube = Platform<YouTubeUser, YouTubeTop, YouTubeTopFilters>;
export type Twitter = Platform<TwitterUser, TwitterTop, TwitterTopFilters>;
export type Twitch = Platform<TwitchUser, TwitchTop, TwitchTopFilters>;
export type TikTok = Platform<TikTokUser, TikTokTop, TikTokTopFilters>;

export class Platform<U, T, F> {
  private api: Matrix;
  private platform: string;
  private defaultFilter: F;

  constructor(api: Matrix, platform: string, defaultFilter: F) {
    this.api = api;
    this.platform = platform;
    this.defaultFilter = defaultFilter;
  }

  /**
   * Returns data about a given user
   *
   * Remember that extended and archive history cost more credits.
   * Find out more at https://socialblade.com/b/docs/user
   */
  public async user(
    query: string,
    history: 'default' | 'extended' | 'archive' = 'default',
  ): Promise<U> {
    const req = await this.api.get<U>(`${this.platform}/statistics`, {
      query,
      history,
    });
    if (!req.status.success) throw req.status.error;

    return req.data;
  }

  /**
   * Returns top list for a given filter
   * Starting from page 1, each response has 100 users which can then be accessed for 24 hours.
   * You can then iterate through the pages you wish to get more results
   *
   * Credit break down can be found at https://socialblade.com/b/docs/top-general
   */
  public async top(
    query: F = this.defaultFilter,
    page: number = 0,
  ): Promise<T[]> {
    const req = await this.api.get<T[]>(`${this.platform}/top`, {
      query,
      page,
    });
    if (!req.status.success) throw req.status.error;

    return req.data;
  }
}
