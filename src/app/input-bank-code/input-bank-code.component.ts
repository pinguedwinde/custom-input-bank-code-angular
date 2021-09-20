import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-bank-code',
  templateUrl: './input-bank-code.component.html',
  styleUrls: ['./input-bank-code.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputBankCodeComponent)
    }
  ]
})
export class InputBankCodeComponent implements OnInit, ControlValueAccessor {

  public digits: Array<number> = (new Array(10)).fill(0).map((value, index) => index);
  public innerValue = '';
  private onChange: any;
  private onTouched: any;
  public isDisabled = false;

  constructor() { }

  ngOnInit(): void {
    this.shuffleDigits();
  }

  writeValue(value: any): void {
    this.innerValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.isDisabled = disabled;
  }


  private shuffleDigits(): number[]{
    return this.digits.sort((x, y) => Math.random() - 0.5);
  }

  private shuffle(a: number[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

public update(i: number) {
    this.innerValue += i;
    this.onChange(this.innerValue);
  }

  public reset() {
    this.innerValue = '';
    this.onChange(this.innerValue);
  }

}
