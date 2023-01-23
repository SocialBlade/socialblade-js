import {
  Data,
  Daily,
  Misc,
  Statistics,
  SmallBranding,
  UserGeneral,
  ExtendedId,
} from '../matrix.shared';
import { TikTokRanks, TikTokTotal } from './shared';

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

export type TikTokDaily = Daily & TikTokTotal;
