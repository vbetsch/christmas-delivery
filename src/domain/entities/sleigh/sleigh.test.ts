import { Sleigh } from './sleigh';
import { SleighParams } from './sleigh.params';

describe('Sleigh', () => {
  it('should be well initialized', () => {
    const params: SleighParams = { presents: [] };
    const sleigh: Sleigh = new Sleigh(params);
    expect(sleigh).toBeDefined();
    expect(sleigh).toBeInstanceOf(Sleigh);
  });
  it('should have presents', () => {
    const params: SleighParams = { presents: [] };
    const sleigh: Sleigh = new Sleigh(params);
    expect(sleigh.presents).toStrictEqual(params.presents);
  });
});
