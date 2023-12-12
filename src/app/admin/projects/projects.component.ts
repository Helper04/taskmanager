import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] | undefined;
  
  constructor(private projectService: ProjectsService){}
  
  ngOnInit(){
    this.projectService.getAllProjects().subscribe(
      (response: Project[])=>{
        this.projects = response;
      }
    );
  }
}