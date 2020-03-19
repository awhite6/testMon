import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import *  as _ from 'lodash';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html'
})
export class TestComponent implements OnInit {

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}
