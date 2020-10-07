import { Options } from './interfaces/options';
import { Matrix } from './matrix';
import { Platform, Twitter, YouTube } from './platform';

export default class SocialBlade {
  private api: Matrix;
  public youtube: YouTube;
  public twitter: Twitter;

  constructor(client_id: string, access_token: string, options: Options = {}) {
    this.api = new Matrix(client_id, access_token, options);
    this.youtube = new Platform(this.api, 'youtube', 'subscribers');
    this.twitter = new Platform(this.api, 'twitter', 'followers');
  }
}
