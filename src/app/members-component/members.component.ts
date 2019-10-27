import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  values: {};
  constructor(private service: MemberService) { }

  ngOnInit() {
    this.service.getValues().subscribe(response => {
      this.values = response;
    },
      (err: HttpErrorResponse) => { console.log(err.message); }
    );
  }
}
