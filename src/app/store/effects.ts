import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { CourseService } from '../services/course/course.service';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.courseService.getAll().pipe(
        map(courses => {
          return { type: ActionTypes.LoadSuccess, payload: courses };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
