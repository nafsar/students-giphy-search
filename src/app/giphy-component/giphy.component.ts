import { Component, OnInit } from '@angular/core';
import { GiphyService } from './giphy.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
  providers: [GiphyService]
})
export class GiphyComponent implements OnInit {
  inputs = [1];
  searchOutcome: any;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() { }

  // search for images 
  lookupGiphy() {
    this.giphyService.search().subscribe(data => {
      this.searchOutcome = data;
    },
      (err: HttpErrorResponse) => { console.log(err.message); }
    )
  }
}
