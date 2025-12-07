import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {Navbar} from "../navbar/navbar";

@Component({
  selector: 'app-homepage',
    imports: [MatToolbarModule,
        MatButtonModule,
        MatIconModule, Navbar],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
