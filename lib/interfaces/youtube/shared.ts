import { ExtendedId } from '../matrix.shared';

export interface YouTubeId extends ExtendedId {
  cusername?: string;
  handle?: string;
}

export interface YouTubeGeneral {
  created_at: Date;
  channel_type: string | null;
  geo: YouTubeGeo | null;
}

export interface YouTubeGeo {
  country_code: string;
  country: string;
}

export interface YouTubeTotal {
  uploads: number;
  subscribers: number;
  views: number;
}

export interface YouTubeRanks {
  sbrank: number | null;
  subscribers: number | null;
  views: number | null;
  country: number | null;
  channel_type: number | null;
}
