import { Data, Daily, Misc, Statistics, UserGeneral, Id, SmallBranding } from '../matrix.shared';
import { StoryFireGeneral, StoryFireRanks, StoryFireTotal } from './shared';

export type StoryFireUserGeneral = StoryFireGeneral & UserGeneral<SmallBranding>;

export interface StoryFireUser extends Data<Id, StoryFireUserGeneral, Statistics<StoryFireTotal>, StoryFireRanks> {
  misc: Misc;
  daily: StoryFireDaily[];
}

export type StoryFireDaily = Daily & StoryFireTotal;
