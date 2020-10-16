export interface TwitchGeneral {
  geo: TwitchGeo;
}

export interface TwitchGeo {
  broadcaster_language: string;
}

export interface TwitchTotal {
  followers: number;
  views: number;
}

export interface TwitchRanks {
  sbrank: number;
  followers: number;
  views: number;
}
