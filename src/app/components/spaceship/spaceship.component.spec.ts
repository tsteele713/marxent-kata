import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipComponent } from './spaceship.component';
import {SpaceshipService} from "../../services/spaceship.service";
import {of} from "rxjs";

describe('SpaceshipComponent', () => {
  let component: SpaceshipComponent;
  let fixture: ComponentFixture<SpaceshipComponent>;
  let mockSpaceshipService = {
    getSpaceshipsA: jasmine.createSpy('getSpaceshipsA').and.returnValue([]),
    getSpaceshipsB: jasmine.createSpy('getSpaceshipsB').and.returnValue([]),
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceshipComponent ],
      providers: [
        { provide: SpaceshipService, useValue: mockSpaceshipService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    it('should filter out duplicate records', () => {
      mockSpaceshipService.getSpaceshipsA = jasmine.createSpy('getSpaceshipsA').and.returnValue(of([{name: 'Apollo 11', classification: 'Rocket'}]));
      mockSpaceshipService.getSpaceshipsB = jasmine.createSpy('getSpaceshipsB').and.returnValue(of([{name: 'Apollo 11', classification: 'Rocket'}]));
      component.ngOnInit();
      expect(component.spaceships.getValue().length).toEqual(1);
      expect(component.spaceships.getValue()).toEqual([{name: 'Apollo 11', classification: 'Rocket'}]);
      expect(component.isLoading.getValue()).toBe(false);
    });

    it('should sort by name in ascending order', () => {

      mockSpaceshipService.getSpaceshipsA = jasmine.createSpy('getSpaceshipsA').and.returnValue(of([
        { name: 'Discovery', classification: 'Shuttle' },
        { name: 'Apollo 11', classification: 'Rocket' }
      ]));
      mockSpaceshipService.getSpaceshipsB = jasmine.createSpy('getSpaceshipsB').and.returnValue(of([
        { name: 'Discovery', classification: 'Shuttle' },
        { name: 'Gemeni', classification: 'Rocket' }
        ]));
      component.ngOnInit();
      expect(component.spaceships.getValue().length).toEqual(3);
      expect(component.spaceships.getValue()).toEqual([
        { name: 'Apollo 11', classification: 'Rocket' },
        { name: 'Discovery', classification: 'Shuttle' },
        { name: 'Gemeni', classification: 'Rocket' }
      ]);
      expect(component.isLoading.getValue()).toBe(false);
    });

  });
});
