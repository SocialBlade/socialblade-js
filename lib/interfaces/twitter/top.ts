import { Data, ExtendedId, Statistics } from '../matrix.shared';
import { TwitterGeneral, TwitterRanks, TwitterTotal } from './shared';

export type TwitterTop = Data<ExtendedId, TwitterGeneral, Statistics<TwitterTotal>, TwitterRanks>;

export type TwitterTopFilters = 'followers' | 'following' | 'tweets' | 'engagement-rate';
