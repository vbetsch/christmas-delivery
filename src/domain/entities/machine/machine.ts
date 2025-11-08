import { MachineStatusEnum } from '@value-objects/machine-status.enum';

export class Machine {
  private readonly _status: MachineStatusEnum;

  public constructor() {
    this._status = MachineStatusEnum.AVAILABLE;
  }

  public get status(): MachineStatusEnum {
    return this._status;
  }
}
