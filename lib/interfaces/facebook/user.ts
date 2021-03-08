import { Data, Daily, Misc, Statistics, UserGeneral, ExtendedId } from '../matrix.shared';
import { FacebookRanks, FacebookTotal } from './shared';

export type FacebookUserGeneral = UserGeneral;

export interface FacebookUser extends Data<ExtendedId, FacebookUserGeneral, Statistics<FacebookTotal>, FacebookRanks> {
  misc: Misc;
  daily: FacebookDaily[];
}

export interface FacebookDaily extends Daily {
  likes: number;
  talking_about: number;
}
