import { ElfStatusEnum } from '@value-objects/elf-status.enum';
import { Present } from '@entities/present/present';

export class Elf {
  private readonly _status: ElfStatusEnum;
  private readonly _presents: Present[];

  public constructor() {
    this._status = ElfStatusEnum.AVAILABLE;
    this._presents = [];
  }

  public get status(): ElfStatusEnum {
    return this._status;
  }

  public isLoaded(): boolean {
    return this._presents.length > 0;
  }

  public takePresent(present: Present): void {
    this._presents.push(present);
  }
}
