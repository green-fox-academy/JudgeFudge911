import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RandomDogService } from '../../services/random-dog.service';
import { DogUrl } from '../../models/dogUrl';
import { DoggosService } from '../../../services/doggos.service';

@Component({
  selector: 'app-dog-picker',
  templateUrl: './dog-picker.component.html',
  styleUrls: ['./dog-picker.component.css']
})
export class DogPickerComponent implements OnInit {
  currentDogUrl: DogUrl;

  constructor(private randomDogSvc: RandomDogService, private doggosSvc: DoggosService) {}

  ngOnInit() {
    this.renderRandomDog();
  }

  like() {
    this.doggosSvc.addDoggo(this.currentDogUrl);
    console.log(this.doggosSvc.getDoggos());
    this.renderRandomDog();
  }

  dislike() {
    this.renderRandomDog();
  }

  renderRandomDog() {
    this.randomDogSvc.getRandomDoggo().subscribe(
      dog => {
        this.currentDogUrl = { url: dog.message };
      },
      err => console.error(err)
    );
  }
}
