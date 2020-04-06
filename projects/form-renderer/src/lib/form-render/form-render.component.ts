import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'form-renderer-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css']
})
export class FormRenderComponent implements OnInit {

@Input()
formSrc: Form;
@Input()
formJson: any;

public frm = null;

ngOnInit() {
    if (this.formJson) {
        this.formSrc = JSON.parse(this.formJson);
        console.log(this.formJson);
      }
}

onFormLoad(form) {

}

}
