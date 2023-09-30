import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openSideBar = new EventEmitter();
  @Input() name: string = '';
  constructor(private router: Router) {}
  /**
   * @Description : Logout from application
   * @param rating
   */
  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }
}
