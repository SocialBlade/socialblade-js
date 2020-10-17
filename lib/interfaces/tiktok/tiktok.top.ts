import { Data, ExtendedId, SmallBranding, Statistics, UserGeneral } from '../matrix.shared';
import { TikTokRanks, TikTokTotal } from './tiktok.shared';

export type TikTokTopFilters = 'followers' | 'following' | 'likes' | 'uploads';
export type TikTokTop = Data<ExtendedId, UserGeneral<SmallBranding>, Statistics<TikTokTotal>, TikTokRanks>;
