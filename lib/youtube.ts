import { Matrix } from './matrix';
import { YouTubeUser } from './interfaces/youtube.user';
import { YouTubeTop } from './interfaces/youtube.top';

export class YouTube {
  private api: Matrix;

  constructor(api: Matrix) {
    this.api = api;
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
  ): Promise<YouTubeUser> {
    const req = await this.api.get<YouTubeUser>('youtube/statistics', {
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
    query: 'subscribers' | 'views' | 'sbrank' = 'subscribers',
    page: number = 0,
  ): Promise<YouTubeTop[]> {
    const req = await this.api.get<YouTubeTop[]>('youtube/top', {
      query,
      page,
    });
    if (!req.status.success) throw req.status.error;

    return req.data;
  }
}
