import { SmallBranding, UserGeneral } from '../matrix.shared';

export interface InstagramGeneral extends UserGeneral<InstagramBranding> {
  media: InstagramMedia;
}

export interface InstagramMedia {
  recent: string[];
}

export interface InstagramBranding extends SmallBranding {
  website: string;
}

export interface InstagramRanks {
  sbrank: number;
  followers: number;
  following: number;
  media: number;
  engagement_rate: number;
}

export interface InstagramTotal {
  followers: number;
  following: number;
  media: number;
  engagement_rate: number;
}
