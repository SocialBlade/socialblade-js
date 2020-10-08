export interface TwitterGeneral {
  created_at: Date;
  geo: TwitterGeo;
}

export interface TwitterRanks {
  sbrank: number;
  followers: number;
  following: number;
  tweets: number;
  engagement: number;
}

export interface TwitterGeo {
  location: string;
}

export interface TwitterTotal {
  followers: number;
  following: number;
  tweets: number;
}
