import { MachineStatusEnum } from '@value-objects/statuses/machine-status.enum';
import { Present } from '@entities/present/present';

export class Machine {
  private readonly _status: MachineStatusEnum;

  public constructor() {
    this._status = MachineStatusEnum.AVAILABLE;
  }

  public get status(): MachineStatusEnum {
    return this._status;
  }

  public buildPresent(): Present {
    return new Present();
  }
}
