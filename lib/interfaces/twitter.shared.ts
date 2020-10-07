export interface TwitterGeneral {
  created_at: Date;
  geo: Geo;
}

export interface TwitterRanks {
  sbrank: number;
  followers: number;
  following: number;
  tweets: number;
  engagement: number;
}

export interface Geo {
  location: string;
}

export interface TwitterTotal {
  followers: number;
  following: number;
  tweets: number;
}
