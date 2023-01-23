import { Matrix } from './matrix';

export class Platform<U> {
  protected api: Matrix;
  protected platform: string;

  constructor(api: Matrix, platform: string) {
    this.api = api;
    this.platform = platform;
  }

  /**
   * Returns data about a given user
   *
   * Remember that extended and archive history cost more credits.
   * Find out more at https://socialblade.com/b/docs/user
   */
  public async user(
    query: string,
    history: 'default' | 'extended' | 'archive' | 'vault' = 'default',
  ): Promise<U> {
    if (this.platform === 'youtube' && history === 'vault')
      throw new Error(
        'YouTube does not support vault history. YouTube requires data to be limited to 3 years.',
      );

    const req = await this.api.get<U>(`${this.platform}/statistics`, {
      query,
      history,
    });
    if (!req.status.success) throw req.status.error;

    return req.data;
  }
}

// Not all platform support top lists at this current time.
// We seperate the Platform and extend with Top that way we can
// use the same base class for all platforms.
export class PlatformWithTop<U, F, T> extends Platform<U> {
  protected defaultFilter: T;

  constructor(api: Matrix, platform: string, defaultFilter: T) {
    super(api, platform);
    this.defaultFilter = defaultFilter;
  }

  /**
   * Returns top list for a given filter
   * Starting from page 1, each response has 100 users which can then be accessed for 24 hours.
   * You can then iterate through the pages you wish to get more results
   *
   * Credit break down can be found at https://socialblade.com/b/docs/top-general
   */
  public async top(
    query: T = this.defaultFilter,
    page: number = 0,
  ): Promise<F[]> {
    const req = await this.api.get<F[]>(`${this.platform}/top`, {
      query,
      page,
    });
    if (!req.status.success) throw req.status.error;

    return req.data;
  }
}
