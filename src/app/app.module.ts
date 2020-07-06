import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { from } from 'rxjs';
import { HttpClientModule  } from '@angular/common/http';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';



const routes: Routes = [
{path:"",component:TaskComponent},
{path:"addtask",component:AddtaskComponent},
{path:"updatetask/:id",component:UpdatetaskComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddtaskComponent,
    UpdatetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
