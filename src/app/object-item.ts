import {isNullOrUndefined} from 'util';
import { Pair } from './pair';

export class ObjectItem {
  pairs: Array<Pair> = [];
  public add(key: string, value: string): void {
    this.pairs.push(new Pair(key, value));
  }
  hasPair(key: string, value: string): boolean {
    return !isNullOrUndefined(this.pairs.filter(item => item.key === key && item.value === value)[0]);
  }
}
