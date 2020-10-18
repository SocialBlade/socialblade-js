import { Data, Daily, Misc, Statistics, UserGeneral, Id, SmallBranding } from '../matrix.shared';
import { DLiveGeneral, DLiveRanks, DLiveTotal } from './shared';

export type DLiveUserGeneral = DLiveGeneral & UserGeneral<SmallBranding>;

export interface DLiveUser extends Data<Id, DLiveUserGeneral, Statistics<DLiveTotal>, DLiveRanks> {
  misc: DLiveMisc;
  daily: DLiveDaily[];
}

export type DLiveDaily = Daily & DLiveTotal;

export interface DLiveMisc extends Misc {
  age_restriction: boolean;
  is_partner: boolean;
  recent: DLiveRecent;
}

export interface DLiveRecent {
  id: number;
  name: string | null;
  cover: string | null;
  background: string | null;
}
