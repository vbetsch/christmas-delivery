import { Logger } from './logger';
import { SpeakCommand } from './commands/speak.command';

describe('Logger', () => {
  let consoleInfoSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation();
  });

  afterEach(() => {
    consoleInfoSpy.mockRestore();
  });

  it('should be well initialized', () => {
    const logger: Logger = new Logger();
    expect(logger).toBeDefined();
    expect(logger).toBeInstanceOf(Logger);
  });

  it('should speak with className and speech only', () => {
    const logger: Logger = new Logger();
    const command: SpeakCommand = {
      className: 'TestClass',
      speech: 'Hello World',
    };

    logger.speak(command);

    expect(consoleInfoSpy).toHaveBeenCalledWith('TestClass ➔ Hello World');
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });

  it('should speak with className, id and speech', () => {
    const logger: Logger = new Logger();
    const command: SpeakCommand = {
      className: 'TestClass',
      id: '12345',
      speech: 'Hello World',
    };

    logger.speak(command);

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      'TestClass #12345 ➔ Hello World'
    );
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
  });

  it('should format message correctly with prefix', () => {
    const logger: Logger = new Logger();
    const command: SpeakCommand = {
      className: 'Elf',
      id: 'abc-def',
      speech: 'I took a present',
    };

    logger.speak(command);

    expect(consoleInfoSpy).toHaveBeenCalledWith(expect.stringContaining('➔'));
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining('Elf #abc-def ➔ I took a present')
    );
  });
});
