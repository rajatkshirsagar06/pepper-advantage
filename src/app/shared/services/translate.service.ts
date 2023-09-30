import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  paCulture = {};
  constructor(private apiServ: ApiService) {
    // this.getCulture();
    this.paCulture = require('../../../assets/locale/en-US.json');
  }
  /**
   * @description : Get culture value
   */
  getCulture() {
    this.apiServ.getCulture('en-US').subscribe((res) => {
      this.paCulture = res;
    });
  }
}
