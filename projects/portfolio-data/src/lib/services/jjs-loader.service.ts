import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JjsLoaderService {

  public activeLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private count: number;
  constructor() {
    this.count = 0;
  }

  public show(): void {
    this.count++;
    this.activeLoader.next(true);
  }

  public hide(): void {
    this.count--;
    if(this.count === 0){
      this.activeLoader.next(false);
    }
  }
}
