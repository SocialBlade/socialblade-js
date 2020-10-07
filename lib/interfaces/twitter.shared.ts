export interface TwitterGeneral {
  created_at: Date;
}

export interface TwitterRanks {
  sbrank: number;
  followers: number;
  following: number;
  tweets: number;
  engagement: number;
}

export interface TwitterTotal {
  followers: number;
  following: number;
  tweets: number;
}
