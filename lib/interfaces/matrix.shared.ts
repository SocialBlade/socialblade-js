export interface Data<Id, General, Statistics, Ranks> {
  id: Id;
  general: General;
  statistics: Statistics;
  ranks: Ranks;
}

export interface Id {
  id: string;
  username: string;
}

export interface ExtendedId extends Id {
  display_name: string;
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

export interface SmallBranding {
  avatar: string;
}

export interface Branding extends SmallBranding {
  banner: string;
}

export interface UserGeneral<T = Branding> {
  branding: T;
}

export interface Statistics<Total> {
  total: Total;
}

export interface GrowthNumbers {
  '1'?: number;
  '3'?: number;
  '7'?: number;
  '14'?: number;
  '30'?: number;
  '60'?: number;
  '90'?: number;
  '180'?: number;
  '365'?: number;
}
