import { MachineStatusEnum } from '@value-objects/statuses/machine-status.enum';
import { Present } from '@entities/present/present';
import { Logger } from '@value-objects/logger/logger';

export class Machine {
  private readonly _logger: Logger;
  private readonly _status: MachineStatusEnum;

  public constructor() {
    this._logger = new Logger();
    this._status = MachineStatusEnum.AVAILABLE;
  }

  private _alert(message: string): void {
    this._logger.speak({
      className: Machine.name,
      speech: message,
    });
  }

  public get status(): MachineStatusEnum {
    return this._status;
  }

  public buildPresent(): Present {
    const present: Present = new Present();
    this._alert('A new present is built');
    return present;
  }
}
