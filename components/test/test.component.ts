import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import *  as _ from 'lodash';

@Component({
  selector: 'test-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

    ngOnInit(): void {
        console.log('this is just a test')
    }

}
