import { ElfStatusEnum } from '@value-objects/statuses/elf-status.enum';
import { Present } from '@entities/present/present';
import { LoadPresentCommand } from './commands/load-present.command';
import { Logger } from '@core/logger/logger';

export class Elf {
  private readonly _id: string;
  private readonly _logger: Logger;
  private readonly _status: ElfStatusEnum;
  private readonly _presents: Present[];

  private _speak(speech: string): void {
    this._logger.speak({
      className: Elf.name,
      id: this._id,
      speech: speech,
    });
  }

  public constructor() {
    this._id = crypto.randomUUID();
    this._logger = new Logger();
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
    this._speak('I took a present');
  }

  public async loadPresent(command: LoadPresentCommand): Promise<void> {
    this._speak("I'm loading a present...");
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    await new Promise((resolve) => setTimeout(resolve, 3000));
    command.sleigh.loadPresent(command.present);
    this._speak('The present is loaded');
  }
}
