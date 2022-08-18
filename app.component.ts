import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'table-creation';

  constructor(private rs : RestService) { }

  columns = ["Employee ID", "Employee Name", "Started On", "Ended On", "Entry Notes", "Deleted On"];

  index = ["Id","EmployeeName","StarTimeUtc","EndTimeUtc","EntryNotes","DeletedOn"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error)=> {
        console.log("Error Occurance" + error);
      }
    )
  }
}
