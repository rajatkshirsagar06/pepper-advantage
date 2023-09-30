import { Injectable } from '@angular/core';
import { mockUsers } from '../../../assets/mock-data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  /**
   * @description : To authenticate user with right credentials
   * @param loginForm : { username: string; password: string }
   * @returns : boolean
   */
  authenticateUser(loginForm: { username: string; password: string }): boolean {
    let currentUser = mockUsers.find(
      (res) =>
        res.name === loginForm.username || res.userId === loginForm.username
    );
    if (!!currentUser && loginForm.password === currentUser.password) {
      sessionStorage.setItem('username', currentUser.userId);
      sessionStorage.setItem('name', currentUser.name);
      return true;
    } else {
      return false;
    }
  }
}
