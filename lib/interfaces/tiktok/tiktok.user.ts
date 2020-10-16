import {
  Data,
  Daily,
  Misc,
  Statistics,
  SmallBranding,
  UserGeneral,
  ExtendedId,
} from '../matrix.shared';
import { TikTokRanks, TikTokTotal } from './tiktok.shared';

export interface TikTokUser
  extends Data<
    ExtendedId,
    UserGeneral<SmallBranding>,
    Statistics<TikTokTotal>,
    TikTokRanks
  > {
  misc: Misc;
  daily: TikTokDaily[];
}

export interface TikTokDaily extends Daily {
  followers: number;
  following: number;
  heart: number;
  uploads: number;
}
