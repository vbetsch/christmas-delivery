import { ElfStatusEnum } from '@value-objects/statuses/elf-status.enum';
import { Elf } from '@entities/elf/elf';
import { Present } from '@entities/present/present';
import { Sleigh } from '@entities/sleigh/sleigh';
import { Logger } from '@core/logger/logger';

describe('Elf', () => {
  let loggerSpeakSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerSpeakSpy = jest.spyOn(Logger.prototype, 'speak');
  });

  afterEach(() => {
    loggerSpeakSpy.mockRestore();
  });

  it('should be well initialized', () => {
    const elf: Elf = new Elf();
    expect(elf).toBeDefined();
    expect(elf).toBeInstanceOf(Elf);
  });

  it('should be available and not be loaded', () => {
    const elf: Elf = new Elf();
    expect(elf.status).toStrictEqual(ElfStatusEnum.AVAILABLE);
    expect(elf.isLoaded()).toStrictEqual(false);
  });

  it('should take a present and be loaded', () => {
    const elf: Elf = new Elf();
    elf.takePresent(new Present());

    expect(elf.isLoaded()).toStrictEqual(true);
    expect(loggerSpeakSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'Elf',
        speech: 'I took a present',
      })
    );
  });

  it('should load present', async () => {
    const elf: Elf = new Elf();
    const sleigh: Sleigh = new Sleigh();
    const present: Present = new Present();

    await elf.loadPresent({ present, sleigh });

    expect(sleigh.presents).toStrictEqual([present]);
    expect(loggerSpeakSpy).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        className: 'Elf',
        speech: "I'm loading a present...",
      })
    );
    expect(loggerSpeakSpy).toHaveBeenNthCalledWith(
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      2,
      expect.objectContaining({
        className: 'Elf',
        speech: 'The present is loaded',
      })
    );
  });
});
