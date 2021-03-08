import { Data, ExtendedId, Statistics } from '../matrix.shared';
import { InstagramGeneral, InstagramRanks, InstagramTotal } from './shared';

export type InstagramTop = Data<ExtendedId, InstagramGeneral, Statistics<InstagramTotal>, InstagramRanks>;

export type InstagramTopFilters = 'followers' | 'following' | 'media' | 'engagement-rank';
