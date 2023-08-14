// card.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CardService {
    private apiUrl = environment.ApiUrlDigimon; // API URL

  constructor(private http: HttpClient) { }

  getCards(pageSize: number, page: number): Observable<any> {
    const url = `${this.apiUrl}?pageSize=${pageSize}&page=${page}`;
    var result = this.http.get<any>(url); 

    return result;
  }

  getCardById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    var result = this.http.get<any>(url); 

    return result;
  }
}