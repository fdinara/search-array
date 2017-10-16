import {Component } from '@angular/core';
import {Pair} from './pair';
import {ObjectItem} from './object-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputArray: Array<Pair> = [];
  searchArray: Array<ObjectItem> = [];
  resultArray: Array<ObjectItem> = [];
  constructor() {
    this.initializeInputArray();
    this.addObject(this.createObject([new Pair('1', '2'), new Pair('3', '4'), new Pair('5', '6')]));
    this.addObject(this.createObject([new Pair('1', '2'), new Pair('3', '4'), new Pair('5', '6')]));
    this.addObject(this.createObject([new Pair('1', '2'), new Pair('3', '4'), new Pair('5', '6')]));
    this.addObject(this.createObject([new Pair('1', '2'), new Pair('3', '4'), new Pair('5', '6')]));
    this.addObject(this.createObject([new Pair('1', '2'), new Pair('3', '4'), new Pair('5', '6')]));
    this.addObject(this.createObject([new Pair('1', '2'), new Pair('3', '4'), new Pair('5', '6')]));

  }
  initializeInputArray(): void {
    this.inputArray.push(new Pair('1', '2'));
    this.inputArray.push(new Pair('3', '4'));
    this.inputArray.push(new Pair('5', '6'));
  }
  addInputPair(): void {
    this.inputArray.push(new Pair('', ''));
  }
  createObject(pairs: Array<Pair>): ObjectItem {
    const obj: ObjectItem = new ObjectItem();
    obj.pairs = pairs;
    return obj;
  }
  addObject(object: ObjectItem) {
    this.searchArray.push(object);
  }
  search() {
    this.resultArray = [];
    for (const object of this.searchArray) {
      let hasPairs = true;
      for (const pair of this.inputArray) {
        if (!object.hasPair(pair.key, pair.value) && pair.key !== '' && pair.value !== '') {
          hasPairs = false;
        }
      }
      if (hasPairs) {
        this.resultArray.push(object);
      }
    }
    return true;
  }
}
