import { Data, ExtendedId, Statistics } from '../matrix.shared';
import { YouTubeGeneral, YouTubeRanks, YouTubeTotal } from './shared';

export type YouTubeTopFilters = 'subscribers' | 'views' | 'sbrank';
export type YouTubeTop = Data<ExtendedId, YouTubeGeneral, Statistics<YouTubeTotal>, YouTubeRanks>;
