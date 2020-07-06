import { Component, OnInit } from '@angular/core';
import { HttpResponse,HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }
  taskobj : object={};
  private REST_API_SERVER = "http://localhost:5555/Task/";
  confirmationstr : string ="A new task has been added successfully.";
  isAdded:boolean=false;
  public addnewtask(addtask)  {
    this.taskobj = {
      "description" : addtask.description,
      "priority" : addtask.priority,
      "status" : addtask.status
     
    }
    this.httpClient.post(this.REST_API_SERVER,this.taskobj).subscribe(
      (res:Response) => {
         this.isAdded=true;

      }
    );
  }

  ngOnInit(): void {
  }

}
