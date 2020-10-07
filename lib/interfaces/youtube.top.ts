import { Data, Statistics } from './matrix.shared';
import { Id, General, Ranks, Total } from './youtube.shared';

export type YouTubeTop = Data<Id, General, Statistics<Total>, Ranks>;
