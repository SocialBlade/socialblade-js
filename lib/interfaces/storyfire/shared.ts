export interface StoryFireGeneral {
  created_at: string;
}

export interface StoryFireTotal {
  followers: number;
  views: number;
  videos: number;
}

export interface StoryFireRanks extends StoryFireTotal {
  sbrank: number;
}
