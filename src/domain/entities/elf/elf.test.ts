import { ElfStatusEnum } from '@value-objects/elf-status.enum';
import { Elf } from '@entities/elf/elf';
import { Present } from '@entities/present/present';
import { Sleigh } from '@entities/sleigh/sleigh';

describe('Elf', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
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
  });
  it('should load present', async () => {
    const elf: Elf = new Elf();
    const sleigh: Sleigh = new Sleigh();
    const present: Present = new Present();

    await elf.loadPresent({ present, sleigh });

    expect(sleigh.presents).toStrictEqual([present]);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'waiting...');
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'done');
  });
});
