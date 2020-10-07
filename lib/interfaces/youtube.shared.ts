import { ExtendedId } from './matrix.shared';

export interface YouTubeId extends ExtendedId {
  cusername: string;
}

export interface General {
  created_at: Date;
  channel_type: string;
  geo: Geo;
}

export interface Geo {
  country_code: string;
  country: string;
}

export interface Total {
  uploads: number;
  subscribers: number;
  views: number;
}

export interface Ranks {
  sbrank: number;
  subscribers: number;
  views: number;
  country: number;
  channel_type: number;
}
