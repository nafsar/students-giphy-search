import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MembersComponent } from './members-component/members.component';
import { GiphyComponent } from './giphy-component/giphy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GiphyService } from './giphy-component/giphy.service';
import { MemberService } from './members-component/member.service';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    GiphyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GiphyService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
