import { Data, Daily, Misc, Statistics, Branding, UserGeneral, ExtendedId } from '../matrix.shared';
import { TwitchGeneral, TwitchRanks, TwitchTotal } from './shared';

export type TwitchUserGeneral = TwitchGeneral & UserGeneral<Branding>;

export interface TwitchUser extends Data<ExtendedId, TwitchUserGeneral, Statistics<TwitchTotal>, TwitchRanks> {
  misc: TwitchMisc;
  daily: TwitchDaily[];
}

export type TwitchDaily = Daily & TwitchTotal;

export interface TwitchMisc extends Misc {
  mature_warning: boolean;
  recent: TwitchRecent;
}

export interface TwitchRecent {
  game: string;
  status: string;
}
