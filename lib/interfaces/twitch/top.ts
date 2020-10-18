import { Data, ExtendedId, Statistics } from '../matrix.shared';
import { TwitchGeneral, TwitchRanks, TwitchTotal } from './shared';

export type TwitchTopFilters = 'followers' | 'views';
export type TwitchTop = Data<ExtendedId, TwitchGeneral, Statistics<TwitchTotal>, TwitchRanks>;
