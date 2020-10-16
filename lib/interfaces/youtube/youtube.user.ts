import {
  Data,
  Daily,
  Misc,
  Statistics,
  Branding,
  UserGeneral,
} from '../matrix.shared';
import {
  YouTubeGeneral,
  YouTubeRanks,
  YouTubeTotal,
  YouTubeId,
} from './youtube.shared';

export type YouTubeUserGeneral = YouTubeGeneral & UserGeneral<YouTubeBranding>;

export interface YouTubeUser
  extends Data<YouTubeId, YouTubeUserGeneral, YouTubeStatistics, YouTubeRanks> {
  misc: YouTubeMisc;
  daily: YouTubeDaily[];
}

export interface YouTubeBranding extends Branding {
  website: string;
  social: YouTubeSocial;
}

export interface YouTubeSocial {
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

export interface YouTubeGrowthNumbers {
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

export interface YouTubeGrowth {
  subs: YouTubeGrowthNumbers;
  views: YouTubeGrowthNumbers;
}

export interface YouTubeStatistics extends Statistics<YouTubeTotal> {
  growth: YouTubeGrowth;
}
