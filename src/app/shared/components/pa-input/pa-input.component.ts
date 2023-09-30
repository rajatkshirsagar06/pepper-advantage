import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pa-input',
  templateUrl: './pa-input.component.html',
  styleUrls: ['./pa-input.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: PaInputComponent
  }]
})
export class PaInputComponent implements ControlValueAccessor {
  @Input() label: string = 'Label';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() dataEmitter: EventEmitter<any> = new EventEmitter();
  touched = false;
  disabled = false;
  onChange = (value: any) => {};
  onTouched = () => {};
  onInput(target: any) {
    this.onChange(target.value);
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
}
