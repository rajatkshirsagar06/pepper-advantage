import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pa-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.scss'],
})
export class UserTagComponent implements OnInit {
  @Input() name: string = '';
  displayChar: string = '';
  ngOnInit(): void {
    this.displayChar = this.name.charAt(0);
  }
}
