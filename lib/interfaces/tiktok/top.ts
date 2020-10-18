import { Data, ExtendedId, SmallBranding, Statistics, UserGeneral } from '../matrix.shared';
import { TikTokRanks, TikTokTotal } from './shared';

export type TikTokTopFilters = 'followers' | 'following' | 'likes' | 'uploads';
export type TikTokTop = Data<ExtendedId, UserGeneral<SmallBranding>, Statistics<TikTokTotal>, TikTokRanks>;
