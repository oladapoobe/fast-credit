import { Injectable } from '@angular/core';
// RXJS
import { BehaviorSubject } from 'rxjs';
// MODELS
import { PROFILE } from 'src/app/model/auth';
@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  currentUser$ = new BehaviorSubject<PROFILE | null>(null);
  constructor() {}
}
