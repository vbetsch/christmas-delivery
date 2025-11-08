import { Present } from '@entities/present/present';
import { Sleigh } from '@entities/sleigh/sleigh';

export type LoadPresentCommand = {
  readonly present: Present;
  readonly sleigh: Sleigh;
};
