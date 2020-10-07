import { Data, ExtendedId, Statistics } from './matrix.shared';
import { General, Ranks, Total } from './youtube.shared';

export type YouTubeTopFilters = 'subscribers' | 'views' | 'sbrank';
export type YouTubeTop = Data<ExtendedId, General, Statistics<Total>, Ranks>;
