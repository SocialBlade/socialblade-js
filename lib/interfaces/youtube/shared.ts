import { ExtendedId } from '../matrix.shared';

export interface YouTubeId extends ExtendedId {
  cusername: string;
}

export interface YouTubeGeneral {
  created_at: Date;
  channel_type: string;
  geo: YouTubeGeo;
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
  sbrank: number;
  subscribers: number;
  views: number;
  country: number;
  channel_type: number;
}
