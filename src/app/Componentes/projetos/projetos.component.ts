import { GithubService } from './../../github.service';
import { Repo } from './../../interfaces/repo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  repos$: Observable<Repo[]>

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.repos$ = this.githubService.getApiGithub();
    
  }



}