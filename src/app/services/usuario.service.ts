import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

//igual ao antigo

const baseUrl = 'http://localhost:8080/api/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(baseUrl + 'usuario', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(baseUrl + 'admin', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(baseUrl + 'mod', { responseType: 'text' });
  }

  get(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${baseUrl}/${id}`);
  }

  getusername(username: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${baseUrl}/${username}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
