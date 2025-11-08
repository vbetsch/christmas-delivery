import { SleighParams } from './sleigh.params';
import { Present } from '@entities/present/present';

export class Sleigh {
  private readonly _presents: Present[];

  public constructor(params: SleighParams) {
    this._presents = params.presents;
  }

  public get presents(): Present[] {
    return this._presents;
  }
}
