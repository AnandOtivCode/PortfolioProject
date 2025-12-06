import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle, MatCardTitleGroup
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardTitleGroup,
    MatButton,
    MatCardImage
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {


}
