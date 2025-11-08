import { PresentStatusEnum } from '@value-objects/present-status.enum';
import { Present } from './present';

describe('Present', () => {
  it('should have a status', () => {
    const present: Present = new Present();
    expect(present).toBeDefined();
    expect(present).toBeInstanceOf(Present);
    expect(present.status).toStrictEqual(PresentStatusEnum.NOT_WRAPPED);
  });
});
