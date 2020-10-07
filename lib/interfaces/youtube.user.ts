import {
  Data,
  Daily,
  Misc,
  Statistics,
  UserGeneral,
  Branding,
} from './matrix.shared';
import { Id, General, Ranks, Total } from './youtube.shared';

export type YouTubeGeneral = General & UserGeneral<YouTubeUserBranding>;

export interface YouTubeUser
  extends Data<Id, YouTubeGeneral, UserStatistics, Ranks> {
  misc: YouTubeMisc;
  daily: YouTubeDaily[];
}

export interface YouTubeUserBranding extends Branding {
  website: string;
  social: Social;
}

export interface Social {
  facebook: string | null;
  twitter: string | null;
  twitch: string | null;
  instagram: string | null;
  linkedin: string | null;
  discord: string | null;
}

export interface YouTubeDaily extends Daily {
  subs: number;
  views: number;
}

export interface YouTubeMisc extends Misc {
  made_for_kids: boolean;
  tags: string[];
}

export interface GrowthNumbers {
  '1': number;
  '3': number;
  '7': number;
  '14': number;
  '30': number;
  '60': number;
  '90': number;
  '180': number;
  '365': number;
}

export interface Growth {
  subs: GrowthNumbers;
  views: GrowthNumbers;
}

export interface UserStatistics extends Statistics<Total> {
  growth: Growth;
}
