import { ElfStatusEnum } from '@value-objects/statuses/elf-status.enum';
import { Present } from '@entities/present/present';
import { LoadPresentCommand } from '@entities/elf/commands/load-present.command';

export class Elf {
  private readonly _id: string;
  private readonly _status: ElfStatusEnum;
  private readonly _presents: Present[];

  private _speak(speech: string): void {
    console.log(`Elf #${this._id} - ${speech}`);
  }

  public constructor() {
    this._id = crypto.randomUUID();
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

  public async loadPresent(command: LoadPresentCommand): Promise<void> {
    this._speak('waiting...');
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    await new Promise((resolve) => setTimeout(resolve, 3000));
    command.sleigh.loadPresent(command.present);
    this._speak('done');
  }
}
