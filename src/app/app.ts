import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {AboutMe} from './about-me/about-me';
import {Projects} from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, AboutMe, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortfolioProject');
}
