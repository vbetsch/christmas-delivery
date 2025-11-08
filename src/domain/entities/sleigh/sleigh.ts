import { Present } from '@entities/present/present';

export class Sleigh {
  private readonly _presents: Present[];

  public constructor() {
    this._presents = [];
  }

  public get presents(): Present[] {
    return this._presents;
  }

  public loadPresent(present: Present): void {
    this._presents.push(present);
  }
}
