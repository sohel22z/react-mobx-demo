import { makeAutoObservable } from 'mobx';

class MobxStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

const mobxStore = new MobxStore();
export default mobxStore;