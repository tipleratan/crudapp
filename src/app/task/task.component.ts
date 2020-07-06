import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders,HttpClient,HttpErrorResponse } from '@angular/common/http';


@Injectable({
providedIn:'root'
})

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: string [];
  private REST_API_SERVER = "http://localhost:5555/Task";
  constructor(private httpClient: HttpClient) { }
  id : number;

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).subscribe(
      data => {
        this.tasks = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
 
  deletetask(id:number) {
    const result = confirm('Are you sure to delete selected task?');
    if(result)
    {
      //const url = '${this.REST_API_SERVER}/${id}';
      const url = `${this.REST_API_SERVER}/${id}`;
      //`${this.baseUrl}/${id}`
      return this.httpClient.delete(url, { headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }) }).toPromise()
      .then(
        ()=>{

          this.sendGetRequest();
        }
      );
    }
  }
   
  ngOnInit(): void {
    this.sendGetRequest();
  }

}

