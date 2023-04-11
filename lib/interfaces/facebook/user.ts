import {
  Data,
  Daily,
  Misc,
  Statistics,
  UserGeneral,
  ExtendedId,
  GrowthNumbers,
} from '../matrix.shared';
import { FacebookRanks, FacebookTotal } from './shared';

export type FacebookUserGeneral = UserGeneral;

export interface FacebookUser
  extends Data<
    ExtendedId,
    FacebookUserGeneral,
    FacebookStatistics,
    FacebookRanks
  > {
  misc: Misc;
  daily: FacebookDaily[];
}

export interface FacebookDaily extends Daily {
  likes: number;
  talking_about: number;
}

export interface FacebookGrowth {
  likes: GrowthNumbers;
  talking_about: GrowthNumbers;
}

export interface FacebookStatistics extends Statistics<FacebookTotal> {
  growth: FacebookGrowth;
}
