import {
  Data,
  Daily,
  Misc,
  ExtendedId,
  Branding,
  Statistics,
  UserGeneral,
  GrowthNumbers,
} from '../matrix.shared';
import { TwitterGeneral, TwitterRanks, TwitterTotal } from './shared';

export type TwitterUserGeneral = TwitterGeneral & UserGeneral<TwitterBranding>;

export interface TwitterUser
  extends Data<
    ExtendedId,
    TwitterUserGeneral,
    TwitterStatistics,
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

export interface TwitterGrowth {
  followers: GrowthNumbers;
  tweets: GrowthNumbers;
}

export interface TwitterStatistics extends Statistics<TwitterTotal> {
  growth: TwitterGrowth;
}
