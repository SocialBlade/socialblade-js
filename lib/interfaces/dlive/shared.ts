export interface DLiveGeneral {
  geo: DLiveGeo;
}

export interface DLiveGeo {
  id: number;
  code: string | null;
  language: string | null;
}

export interface DLiveTotal {
  followers: number;
  following: number;
  videos: number;
  earnings: number;
}

export interface DLiveRanks extends DLiveTotal {
  sbrank: number;
}
