import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Bank S';

  public form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: [''],
      code: ['']
    })
  }
}
