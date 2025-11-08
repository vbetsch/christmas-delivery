import { MachineStatusEnum } from '@value-objects/machine-status.enum';
import { Machine } from '@entities/machine/machine';
import { Present } from '@entities/present/present';

describe('Machine', () => {
  it('should have a status', () => {
    const machine: Machine = new Machine();
    expect(machine).toBeDefined();
    expect(machine).toBeInstanceOf(Machine);
    expect(machine.status).toStrictEqual(MachineStatusEnum.AVAILABLE);
  });
  it('should build a present', () => {
    const machine: Machine = new Machine();
    const present: Present = machine.buildPresent();
    expect(present).toBeInstanceOf(Present);
  });
});
