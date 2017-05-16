import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { TitlecasePipe } from './titlecase.pipe';
import { ToDoPageComponent } from 'app/to-do-page/to-do-page.component';

import { ToDoService } from './to-do.service';
import { routeConfig } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    GenericInputComponent,
    TitlecasePipe,
    ToDoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
