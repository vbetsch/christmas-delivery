import { PresentStatusEnum } from '@value-objects/statuses/present-status.enum';
import { Present } from './present';

describe('Present', () => {
  it('should be well initialized', () => {
    const present: Present = new Present();
    expect(present).toBeDefined();
    expect(present).toBeInstanceOf(Present);
  });
  it('should be not wrapped', () => {
    const present: Present = new Present();
    expect(present.status).toStrictEqual(PresentStatusEnum.NOT_WRAPPED);
  });
});
