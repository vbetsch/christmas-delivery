import { PresentStatusEnum } from '../../value-objects/present-status.enum';

export class Present {
  private readonly _status: PresentStatusEnum;

  public constructor() {
    this._status = PresentStatusEnum.NOT_WRAPPED;
  }

  public get status(): PresentStatusEnum {
    return this._status;
  }
}
