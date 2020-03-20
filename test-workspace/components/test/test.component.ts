import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import *  as _ from 'lodash';

@Component({
  selector: 'test-me',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

    ngOnInit(): void {
        console.log('the test was successful')
    }

}
