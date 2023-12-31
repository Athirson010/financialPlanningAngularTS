import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app/app-routing.module';
import { DisplayContadorComponent } from './app/display-contador/display-contador.component';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { appReducer } from './store/app.state';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './app/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ButtonComponent } from './app/components/button/button.component';
import { InputComponent } from './app/components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContadorComponent,
    LoginComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Chama o modulo da aplicaçãop
    StoreModule.forRoot({app: appReducer}),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
