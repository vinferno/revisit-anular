import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$: Observable<{id: number, name: string}[]>;
  constructor(
    private api: ApiService,
  ) {
    this.users$ = this.api.get<{id: number, name: string}[]>('users');
  }
}
