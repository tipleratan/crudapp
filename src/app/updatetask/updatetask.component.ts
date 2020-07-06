import { Component, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient,HttpErrorResponse } from '@angular/common/http';
import{ActivatedRoute, Router} from '@angular/router';
  import { from } from 'rxjs';
@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  private REST_API_SERVER = "http://localhost:5555/Task";
  id:number;
  taskdata:object={
    "description" : "",
    "priority" : "",
    "status" : ""
  };
  tasks=[];
  taskobj:object={};

  constructor(private router:Router,private route : ActivatedRoute,private httpClient:HttpClient) { }
 
  updatetask(task){
    this.taskobj = {
      "description" : task.description,
      "priority" : task.priority,
      "status" : task.status,
      "id" : task.id
    };
    const url = `${this.REST_API_SERVER}/${this.id}`;
    return this.httpClient.put(url, JSON.stringify(this.taskobj) ,{ headers: new HttpHeaders({
      'Content-Type': 'application/json',
  }) }).toPromise()
    .then(
      ()=>{

        this.router.navigate(['/']);
      }
    );
  }


  ngOnInit(): void {
      this.route.params.subscribe(
        params=>{
          this.id=+params['id'];
        }
      )

      this.httpClient.get(this.REST_API_SERVER).subscribe(
        data => {
          this.tasks = data as string [];	 // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
          for(var i=0;i<this.tasks.length;i++)
          {
            if(parseInt(this.tasks[i].id)===this.id)
            {
                this.taskdata=this.tasks[i];
                break;
            }
          }
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

  }

  //public sendGetRequest(){

  //}

}
