import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './members';
import dataplay from '../../assets/data/dataplay.json';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MemberService implements OnInit {
  url: string;
  origUrl: string;
  keyFix = JSON.parse(JSON.stringify(dataplay).replace(/\s(?=\w+":)/g, "_"));

  constructor(private http: HttpClient) {
    this.url = 'assets/data/dataplay.json';
  }

  getValues(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url).pipe(map(res => this.keyFix));
  }
  ngOnInit() { }
}
