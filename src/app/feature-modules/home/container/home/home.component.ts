import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.userName = sessionStorage['name'];
  }
  navigateToHomePage() {
    this.router.navigateByUrl('home');
  }
}
