import { OnInit } from '@angular/core';
import { Form } from '../form';
export declare class FormRenderComponent implements OnInit {
    formSrc: Form;
    formJson: string;
    frm: any;
    ngOnInit(): void;
    onFormLoad(form: any): void;
}
