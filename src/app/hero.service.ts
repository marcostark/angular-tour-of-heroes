import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice: MessageService) { }

  
  getHeroes(): Observable<Hero[]> {
    this.messageservice.add('HeroService: Heróis buscados');
    return of(HEROES);  
  }
}
