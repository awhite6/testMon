import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormRenderComponent } from './form-render/form-render.component';
import { MatCardModule } from '@angular/material';
import { FormioModule, FormioAppConfig } from 'angular-formio';


@NgModule({
  declarations: [
    FormRenderComponent, 
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormioModule,
  ],
  exports: [FormRenderComponent]
})
export class FormRendererModule { }
