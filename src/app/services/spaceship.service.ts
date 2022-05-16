import { Injectable } from '@angular/core';
import { Spaceship } from '../models/spaceship.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  getSpaceshipsA(): Observable<Spaceship[]> {

    return new BehaviorSubject<Spaceship[]>(
      [
        {
          name: 'Endeavour',
          classification: 'Shuttle'
        },
        {
          name: 'Apollo 10',
          classification: 'Rocket'
        },
        {
          name: 'Apollo 1',
          classification: 'Rocket'
        },
        {
          name: 'Challenger',
          classification: 'Shuttle'
        },
        {
        name: 'Apollo 13',
        classification: 'Rocket'
      },
      ]
    ).asObservable();
  }

  getSpaceshipsB(): Observable<Spaceship[]> {

    return new BehaviorSubject<Spaceship[]>(
      [
        {
          name: 'Endeavour',
          classification: 'Shuttle'
        },
        {
          name: 'Apollo 11',
          classification: 'Rocket'
        },
        {
          name: 'Apollo 13',
          classification: 'Rocket'
        },
        {
          name: 'Discover',
          classification: 'Shuttle'
        }
      ]
    ).asObservable();
  }
}
