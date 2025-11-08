import { Machine } from '@entities/machine/machine';
import { Present } from '@entities/present/present';
import { Elf } from '@entities/elf/elf';
import { Sleigh } from '@entities/sleigh/sleigh';

console.log('-------------- Christmas Delivery --------------');

const toyMachine: Machine = new Machine();
const deliveryElf: Elf = new Elf();
const santaSleigh: Sleigh = new Sleigh();

const currentPresent: Present = toyMachine.buildPresent();
deliveryElf.takePresent(currentPresent);
deliveryElf.loadPresent({ present: currentPresent, sleigh: santaSleigh });
