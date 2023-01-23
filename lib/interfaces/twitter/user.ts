import {
  Data,
  Daily,
  Misc,
  ExtendedId,
  Branding,
  Statistics,
  UserGeneral,
} from '../matrix.shared';
import { TwitterGeneral, TwitterRanks, TwitterTotal } from './shared';

export type TwitterUserGeneral = TwitterGeneral & UserGeneral<TwitterBranding>;

export interface TwitterUser
  extends Data<
    ExtendedId,
    TwitterUserGeneral,
    Statistics<TwitterTotal>,
    TwitterRanks
  > {
  misc: TwitterMisc;
  daily: TwitterDaily[];
}

export interface TwitterBranding extends Branding {
  website: string;
}

export interface TwitterDaily extends Daily {
  followers: number;
  following: number;
  tweets: number;
  favorites: number;
}

export interface TwitterMisc extends Misc {
  twitter_verified: boolean;
}
