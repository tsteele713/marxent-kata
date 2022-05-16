import {Component, OnInit} from '@angular/core';
import {flatten, isEqual, uniq, uniqWith} from 'lodash';
import {BehaviorSubject} from 'rxjs';
import {zip} from 'rxjs/internal/observable/zip';
import { Spaceship } from 'src/app/models/spaceship.model';
import {SpaceshipService} from 'src/app/services/spaceship.service';

@Component({
  selector: 'spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.less']
})
export class SpaceshipComponent implements OnInit {

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  spaceships: BehaviorSubject<Spaceship[]> = new BehaviorSubject<Spaceship[]>([])

  constructor(private spaceshipService: SpaceshipService) { }

  ngOnInit(): void {

    let zipped = zip(this.spaceshipService.getSpaceshipsA(), this.spaceshipService.getSpaceshipsB());

    zipped.subscribe((spaceships) => {
      let flattenedShips = uniqWith(flatten(spaceships), isEqual);
      this.spaceships.next(flattenedShips.sort((a, b) => (a.name > b.name) ? 1 : -1));
      this.isLoading.next(false);
    },
    err => console.error(err));

  }

}
