import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserPostsComponent } from './Components/user-posts/user-posts.component';
import { UserCommentsComponent } from './Components/user-comments/user-comments.component';
import { UserDetailsService } from './Services/user-details.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    UserPostsComponent,
    UserCommentsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserDetailsService],
})
export class AppModule {}
