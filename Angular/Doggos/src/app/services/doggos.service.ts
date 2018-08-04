import { Injectable } from '@angular/core';
import { DogUrl } from '../dog/models/dogUrl';

@Injectable({
  providedIn: 'root'
})
export class DoggosService {
  doggos: DogUrl[] = [];

  constructor() {}

  getDoggos() {
    return this.doggos;
  }

  addDoggo(newDoggo: DogUrl) {
    this.doggos = [...this.doggos, newDoggo] as DogUrl[];
  }
}
