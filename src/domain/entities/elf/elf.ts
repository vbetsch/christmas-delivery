import { ElfStatusEnum } from '@value-objects/elf-status.enum';

export class Elf {
  private readonly _status: ElfStatusEnum;

  public constructor() {
    this._status = ElfStatusEnum.AVAILABLE;
  }

  public get status(): ElfStatusEnum {
    return this._status;
  }
}
