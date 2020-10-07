export interface Data<Id, General, Statistics, Ranks> {
  id: Id;
  general: General;
  statistics: Statistics;
  ranks: Ranks;
}

export interface Grade {
  color: string;
  grade: string;
}

export interface Misc {
  grade: Grade;
  sb_verified: boolean;
}

export interface Daily {
  date: Date;
}

export interface Branding {
  avatar: string;
  banner: string;
}

export interface UserGeneral<T = Branding> {
  branding: T;
}

export interface Statistics<Total> {
  total: Total;
}
