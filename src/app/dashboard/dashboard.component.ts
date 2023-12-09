import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;

  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Sandeep Vangala';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients =[
      "ABC Infotech Ltd.", "DEF Software Solutions","GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project C"
    ];

    for(var i =2024; i >=2018;i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = [

      {Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMembersCount: 10, TemporarilyUnavailableMembers: 6},
      {Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMembersCount: 5, TemporarilyUnavailableMembers: 12},
    ];

    this.TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Sandeep", Status: "Available" },
          { ID: 2, Name: "Siva", Status: "Un-Available" },
          { ID: 3, Name: "Shekar", Status: "Busy" }
        ]
      },
      {
        Region: "West", Members: [
          { ID: 1, Name: "Anand", Status: "Un Available" },
          { ID: 2, Name: "Amit", Status: "Available" },
          { ID: 3, Name: "Aakash", Status: "Busy" }
        ]
      },
      {
        Region: "North", Members: [
          { ID: 1, Name: "Bhargav", Status: "Busy" },
          { ID: 2, Name: "Bharath", Status: "Busy" },
          { ID: 3, Name: "Bheeshma", Status: "Busy" }
        ]
      },
      {
        Region: "South", Members: [
          { ID: 1, Name: "Naveen", Status: "Available" },
          { ID: 2, Name: "Naresh", Status: "Available" },
          { ID: 3, Name: "Nitheesh", Status: "Available" }
        ]
      }
    ];
  }

  onProjectChange($event: any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    }
    else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 1113507;
      this.CurrentExpenditure = 86788;
      this.AvailableFunds = 42436;
    }
    else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 3113507;
      this.CurrentExpenditure = 789456;
      this.AvailableFunds = 102030;
    }
  }
}
