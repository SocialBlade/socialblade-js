import { Options } from './interfaces/options';
import { Matrix } from './matrix';
import { YouTube } from './youtube';

export default class SocialBlade {
  private api: Matrix;
  public youtube: YouTube;

  constructor(client_id: string, access_token: string, options: Options = {}) {
    this.api = new Matrix(client_id, access_token, options);
    this.youtube = new YouTube(this.api);
  }
}
