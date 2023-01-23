import { Data, ExtendedId, Statistics, UserGeneral } from '../matrix.shared';
import { FacebookRanks, FacebookTotal } from './shared';

export type FacebookTop = Data<
  ExtendedId,
  UserGeneral,
  Statistics<FacebookTotal>,
  FacebookRanks
>;

export type FacebookTopFilters = 'likes' | 'talking-about';
