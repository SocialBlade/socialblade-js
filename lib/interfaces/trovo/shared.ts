export interface TrovoGeneral {
  geo: TrovoGeo;
}

export interface TrovoGeo {
  broadcaster_language: string | null;
}

export interface TrovoTotal {
  followers: number;
}

export interface TrovoRanks extends TrovoTotal {
  sbrank: number;
  audience: number;
  language: number;
}
