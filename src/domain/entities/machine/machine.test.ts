import { MachineStatusEnum } from '@value-objects/machine-status.enum';
import { Machine } from '@entities/machine/machine';

describe('Machine', () => {
  it('should have a status', () => {
    const machine: Machine = new Machine();
    expect(machine).toBeDefined();
    expect(machine).toBeInstanceOf(Machine);
    expect(machine.status).toStrictEqual(MachineStatusEnum.AVAILABLE);
  });
});
