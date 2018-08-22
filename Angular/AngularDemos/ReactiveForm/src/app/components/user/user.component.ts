import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Achievement } from '../../models/achievement';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User;

  userForm: FormGroup;

  achievementForm: FormGroup;

  selected: Achievement;

  constructor(private fb: FormBuilder) {
    this.user = {
      profilePictureUrl:
        'https://vignette.wikia.nocookie.net/disney/images/b/b0/Kim_Possible_-_Rufus_-_Render.png/revision/latest?cb=20180210023208',
      username: 'Rufus',
      achievements: [{ id: 1, title: 'Ate a healthy breakfast', date: new Date('August 22, 2018 8:00:00') }]
    };
    this.userForm = this.fb.group({
      profilePictureUrl: ['', Validators.required],
      username: ['', Validators.required, Validators.pattern('')]
    });
    this.achievementForm = this.fb.group({
      id: [1, Validators.required],
      title: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  editRequest(achievement: Achievement) {
    this.selected = achievement;
  }

  unselect() {
    this.selected = undefined;
  }

  editConfirmed() {
    const formValue = this.achievementForm.value;
    this.user.achievements[formValue.id] = formValue;
    this.selected = undefined;
    console.log(this.user.achievements[formValue.id]);

  }
}
