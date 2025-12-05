import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-about-me',
  imports: [MatCardModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

  longText = "Hello! My name is Anand Otiv and I'm a currently a student at St.Clair for <a href=\"https://www.stclaircollege.ca/programs/computer-programming\">Computer Programming</a>.\n" +
    "  My main interests in my field include Machine Learning and AI, Game Development and Cyber Security. I myself am a big fan of Information Technology\n" +
    "  and how everything works. When I need a break from computers I enjoy film, literature, and painting."

}
