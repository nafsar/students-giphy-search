import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService implements OnInit {
  values = '';
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  search() {
    let giphyInputValue = (<HTMLInputElement>document.getElementById("giphyRequest")).value;
    // console.log(giphyInputValue);
    let apiKey = "&api_key=dc6zaTOxFJmzC";

    return this.http.get<any>(`https://api.giphy.com/v1/gifs/search?q=` + giphyInputValue + apiKey);
  }
}
