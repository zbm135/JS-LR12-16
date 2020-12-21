import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoremComponent } from './lorem/lorem.component';
import { ListWorkerComponent } from './list-worker/list-worker.component';
import { AddEditWorkerComponent } from './add-edit-worker/add-edit-worker.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AllnamePipe } from './services/pipes/allname.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoremComponent,
    ListWorkerComponent,
    AddEditWorkerComponent,
    AllnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
