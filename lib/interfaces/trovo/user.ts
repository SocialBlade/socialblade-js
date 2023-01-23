import {
  Data,
  Daily,
  Misc,
  Statistics,
  UserGeneral,
  SmallBranding,
  ExtendedId,
} from '../matrix.shared';
import { TrovoGeneral, TrovoRanks, TrovoTotal } from './shared';

export type TrovoUserGeneral = TrovoGeneral & UserGeneral<SmallBranding>;

export interface TrovoUser
  extends Data<
    ExtendedId,
    TrovoUserGeneral,
    Statistics<TrovoTotal>,
    TrovoRanks
  > {
  misc: TrovoMisc;
  daily: TrovoDaily[];
}

export type TrovoDaily = Daily & TrovoTotal;

export interface TrovoMisc extends Misc {
  audience_type: string;
  recent: TrovoRecent;
}

export interface TrovoRecent {
  game: string;
  status: string;
}
