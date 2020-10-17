export interface TikTokTotal {
  followers: number;
  following: number;
  uploads: number;
  likes: number;
}

export interface TikTokRanks extends TikTokTotal {
  sbrank: number;
}
