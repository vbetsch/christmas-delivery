import { Sleigh } from './sleigh';
import { Present } from '@entities/present/present';

describe('Sleigh', () => {
  it('should be well initialized', () => {
    const sleigh: Sleigh = new Sleigh();
    expect(sleigh).toBeDefined();
    expect(sleigh).toBeInstanceOf(Sleigh);
  });
  it('should load present', () => {
    const sleigh: Sleigh = new Sleigh();
    const present: Present = new Present();
    sleigh.loadPresent(present);
    expect(sleigh.presents).toStrictEqual([present]);
  });
});
