import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameCity } from '../model/gamecity.model';

@Injectable({
  providedIn: 'root'
})
export class GamecityService {
  baseUrl: string='http://localhost:3000/gamelist';

  constructor(private http:HttpClient) { }

  getGameList(){
    return this.http.get<GameCity[]>(this.baseUrl);
  }
}
