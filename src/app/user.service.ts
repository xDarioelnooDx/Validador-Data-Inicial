// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSource = new BehaviorSubject<string>('');
  currentUser = this.userNameSource.asObservable();

  setUserName(name: string) {
    this.userNameSource.next(name);
  }
}