import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion'
import {MenuItem} from 'primeng/api'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {DialogModule} from 'primeng/dialog'
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {TableModule} from 'primeng/table';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { CreateShowProjectComponent } from './create-show-project/create-show-project.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import {PageNotFoundComponent} from './page-not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    CreateShowProjectComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
