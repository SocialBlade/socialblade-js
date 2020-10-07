export interface General {
  channelid: string;
  displayname: string;
  created_at: Date;
  channeltype: string;
  geo: Geo;
}

export interface Geo {
  country_code: string;
  country: string;
}

export interface Id {
  channelid: string;
  username: string;
  cusername: string;
}

export interface Total {
  uploads: number;
  subscribers: number;
  vidviews: number;
}

export interface Ranks {
  rank_sbrank: number;
  rank_subscribers: number;
  rank_views: number;
  rank_country: number;
  rank_channeltype: number;
}
