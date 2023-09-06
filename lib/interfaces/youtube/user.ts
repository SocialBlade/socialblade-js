import {
  Data,
  Daily,
  Misc,
  Statistics,
  Branding,
  UserGeneral,
  GrowthNumbers,
} from '../matrix.shared';
import {
  YouTubeGeneral,
  YouTubeRanks,
  YouTubeTotal,
  YouTubeId,
} from './shared';

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
  tiktok: string | null;
}

export interface YouTubeDaily extends Daily {
  subs: number;
  views: number;
}

export interface YouTubeMisc extends Misc {
  made_for_kids: boolean;
  tags?: string[];
}

export interface YouTubeGrowth {
  subs: GrowthNumbers;
  vidviews: GrowthNumbers;
}

export interface YouTubeStatistics extends Statistics<YouTubeTotal> {
  growth: YouTubeGrowth;
}
