import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  imports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
