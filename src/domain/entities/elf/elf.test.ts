import { ElfStatusEnum } from '@value-objects/elf-status.enum';
import { Elf } from '@entities/elf/elf';

describe('Elf', () => {
  it('should have a status', () => {
    const elf: Elf = new Elf();
    expect(elf).toBeDefined();
    expect(elf).toBeInstanceOf(Elf);
    expect(elf.status).toStrictEqual(ElfStatusEnum.AVAILABLE);
  });
});
