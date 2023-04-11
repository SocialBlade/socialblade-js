import {
  Daily,
  Data,
  ExtendedId,
  GrowthNumbers,
  Misc,
  Statistics,
  UserGeneral,
} from '../matrix.shared';
import {
  InstagramBranding,
  InstagramGeneral,
  InstagramRanks,
  InstagramTotal,
} from './shared';

export type InstagramUserGeneral = InstagramGeneral &
  UserGeneral<InstagramBranding>;

export interface InstagramUser
  extends Data<
    ExtendedId,
    InstagramUserGeneral,
    InstagramStatistics,
    InstagramRanks
  > {
  misc: Misc;
  daily: InstagramDaily[];
}

export interface InstagramDaily extends Daily {
  followers: number;
  following: number;
  media: number;
  avg_likes: number;
  avg_comments: number;
}

export interface InstagramGrowth {
  followers: GrowthNumbers;
  media: GrowthNumbers;
}

export interface InstagramStatistics extends Statistics<InstagramTotal> {
  growth: InstagramGrowth;
}
