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
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {Navbar} from '../navbar/navbar';
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
    MatCardImage,
    ScrollingModule,
    MatTab,
    MatTabGroup,
    Navbar
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {


}
