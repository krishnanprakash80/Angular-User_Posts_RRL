import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDetailsService {
  private baseURL = 'https://jsonplaceholder.typicode.com/';
  // private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  // private postsUrl = 'https://jsonplaceholder.typicode.com/users/posts';
  // private commentsUrl = 'https://jsonplaceholder.typicode.com/posts/{postId}/comments'
  constructor(private httpClient: HttpClient) {}

  getUserData() {
    return this.httpClient.get(this.baseURL + 'users');
  }

  getUserPosts(userId) {
    return this.httpClient.get(this.baseURL + 'users/' + userId + '/posts/');
  }

  getUserComments(postId) {
    return this.httpClient.get(this.baseURL + 'posts/' + postId + '/comments');
  }
}
