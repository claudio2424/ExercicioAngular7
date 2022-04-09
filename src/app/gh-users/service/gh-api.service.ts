import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ghUser } from '../components/models/ghUser';
import { usRepor } from '../components/models/usRepor';



@Injectable()
export class GhApiService {
  private readonly baseUrl: string = 'https://api.github.com/users'

  
  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<ghUser> {
    return this.http.get<ghUser>(`https://api.github.com/users/${username}`)
    
  }
  findRepos(username:string): Observable<usRepor[]> {
    return this.http.get<usRepor[]>(`${this.baseUrl}/${username}/repos`)
  }


}