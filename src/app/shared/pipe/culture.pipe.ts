import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'cultureTranslate',
})
export class CulturePipe implements PipeTransform {
  translations = {};
  constructor(private cultureServ: TranslateService) {
    this.translations = this.cultureServ.paCulture;
  }
  transform(value: any, ...args: unknown[]): unknown {
    const lens = (obj: any, path: any) =>
      path
        .split('.')
        .reduce((o: any, key: any) => (o && o[key] ? o[key] : null), obj);
    return lens(this.translations, value);
  }
}
