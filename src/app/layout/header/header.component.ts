import { Component, OnInit } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBook = faBook;
  faUser = faUser;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
