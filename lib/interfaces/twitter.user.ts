import { Data, Daily, Misc, UserGeneral } from './matrix.shared';
import { General, Ranks } from './twitter.shared';

export type TwitterGeneral = General & UserGeneral<TwitterBranding>;

export interface TwitterUser
  extends Data<Id, TwitterGeneral, Statistics, Ranks> {
  misc: TwitterMisc;
  tags: string[];
  daily: TwitterDaily[];
}

export interface TwitterDaily extends Daily {
  subs: number;
  views: number;
}

export interface TwitterMisc extends Misc {
  twitter_verified: boolean;
}
