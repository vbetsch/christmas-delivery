import { MachineStatusEnum } from '@value-objects/statuses/machine-status.enum';
import { Machine } from '@entities/machine/machine';
import { Present } from '@entities/present/present';
import { Logger } from '@value-objects/logger/logger';

describe('Machine', () => {
  let loggerSpeakSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerSpeakSpy = jest.spyOn(Logger.prototype, 'speak');
  });

  afterEach(() => {
    loggerSpeakSpy.mockRestore();
  });

  it('should be well initialized', () => {
    const machine: Machine = new Machine();
    expect(machine).toBeDefined();
    expect(machine).toBeInstanceOf(Machine);
  });

  it('should be available', () => {
    const machine: Machine = new Machine();
    expect(machine.status).toStrictEqual(MachineStatusEnum.AVAILABLE);
  });

  it('should build a present', () => {
    const machine: Machine = new Machine();
    const present: Present = machine.buildPresent();

    expect(present).toBeInstanceOf(Present);
    expect(loggerSpeakSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'Machine',
        speech: 'A new present is built',
      })
    );
  });
});
