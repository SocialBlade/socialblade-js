export interface DailyMotionGeneral {
  geo: DailyMotionGeo;
}

export interface DailyMotionGeo {
  country_code: string;
  language: string;
}

export interface DailyMotionTotal {
  followers: number;
  following: number;
  views: number;
  uploads: number;
}

export interface DailyMotionRanks {
  sbrank: number;
  followers: number;
  views: number;
  country: number;
  channel_type: number;
}
