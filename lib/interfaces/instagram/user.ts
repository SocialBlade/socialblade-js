import { Daily, Data, ExtendedId, Misc, Statistics, UserGeneral } from '../matrix.shared';
import { InstagramBranding, InstagramGeneral, InstagramRanks, InstagramTotal } from './shared';

export type InstagramUserGeneral = InstagramGeneral & UserGeneral<InstagramBranding>;

export interface InstagramUser extends Data<ExtendedId, InstagramUserGeneral, Statistics<InstagramTotal>, InstagramRanks> {
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
