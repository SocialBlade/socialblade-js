import { MatrixRequest } from './interfaces/matrix';
import { Response } from './interfaces/matrix';
import { Options } from './interfaces/options';

export class Matrix {
  private base_url: string = `https://matrix.sbapis.com/b/`;
  private user_agent: string =
    'Social Blade TypeScript Library :: SocialBlade/socialblade-js';

  constructor(
    private client_id: string,
    private access_token: string,
    { base_url, user_agent }: Options,
  ) {
    if (base_url) this.base_url = base_url;
    if (user_agent) this.user_agent = user_agent;
  }

  private async request<T>(
    method: 'GET',
    { path, data, headers }: MatrixRequest,
  ): Promise<Response<T>> {
    const qs = `?${Object.keys(data)
      .map((key) => key + '=' + data[key])
      .join('&')}`;

    return await fetch(`${this.base_url}${path}${method === 'GET' ? qs : ''}`, {
      method,
      body: method !== 'GET' ? data : null,
      headers:
        this.client_id === 'socialblade'
          ? undefined
          : {
              ...headers,
              clientid: this.client_id,
              token: this.access_token,
              'User-Agent': this.user_agent,
            },
    }).then((data) => data.json());
  }

  public async get<T>(
    path: string,
    data = {},
    headers = {},
  ): Promise<Response<T>> {
    return await this.request<T>('GET', { path, data, headers });
  }
}
