import { Data, Daily, Misc, Statistics, UserGeneral, Id, SmallBranding } from '../matrix.shared';
import { DailyMotionGeneral, DailyMotionRanks, DailyMotionTotal } from './shared';

export type DailyMotionUserGeneral = DailyMotionGeneral & UserGeneral<SmallBranding>;

export interface DailyMotionUser
  extends Data<Id, DailyMotionUserGeneral, Statistics<DailyMotionTotal>, DailyMotionRanks> {
  misc: DailyMotionMisc;
  daily: DailyMotionDaily[];
}

export type DailyMotionDaily = Daily & DailyMotionTotal;

export interface DailyMotionMisc extends Misc {
  verified: boolean;
}
