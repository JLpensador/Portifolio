import { Component } from '@angular/core';
import { ProjectService } from '../../project.service';
@Component({
  selector: 'app-card-projetos',
  templateUrl: './card-projetos.component.html',
  styleUrl: './card-projetos.component.scss',
})
export class CardProjetosComponent {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
