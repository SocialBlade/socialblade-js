import {
  Data,
  Daily,
  Misc,
  Statistics,
  UserGeneral,
  Id,
  SmallBranding,
  GrowthNumbers,
} from '../matrix.shared';
import { StoryFireGeneral, StoryFireRanks, StoryFireTotal } from './shared';

export type StoryFireUserGeneral = StoryFireGeneral &
  UserGeneral<SmallBranding>;

export interface StoryFireUser
  extends Data<Id, StoryFireUserGeneral, StoryFireStatistics, StoryFireRanks> {
  misc: Misc;
  daily: StoryFireDaily[];
}

export type StoryFireDaily = Daily & StoryFireTotal;

export interface StoryFireGrowth {
  followers: GrowthNumbers;
  views: GrowthNumbers;
  videos: GrowthNumbers;
}

export interface StoryFireStatistics extends Statistics<StoryFireTotal> {
  growth: StoryFireGrowth;
}
