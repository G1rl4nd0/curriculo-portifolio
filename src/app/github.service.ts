import { Repo } from './interfaces/repo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getApiGithub() {
    const url = 'https://api.github.com/users/G1RL4ND0/repos';
    
    return this.http.get<Repo[]>(url);

  }
}