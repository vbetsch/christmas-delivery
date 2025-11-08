import { SpeakCommand } from './commands/speak.command';

export class Logger {
  private readonly _prefix: string = '➔';

  public speak(command: SpeakCommand): void {
    let message: string = command.className;
    if (command.id) {
      message += ` #${command.id}`;
    }
    message += ` ${this._prefix} ${command.speech}`;
    console.info(message);
  }
}
