import { ElfStatusEnum } from '@value-objects/elf-status.enum';
import { Elf } from '@entities/elf/elf';
import { Present } from '@entities/present/present';

describe('Elf', () => {
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
});
