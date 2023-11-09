import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit, Optional, SkipSelf,
  ViewEncapsulation
} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  AsyncSubject,
  BehaviorSubject,
  concatMap,
  exhaustMap, map,
  mergeMap,
  ReplaySubject,
  Subject,
  switchMap,
  takeUntil, tap
} from "rxjs";
import {IntPipe} from "./int.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.Default,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.ShadowDom,
})

export class AppComponent implements OnInit, OnDestroy {
  public title1 = 'interview1';
  public static title2 = 'interview2';
  private title3 = 'interview3';
  protected title4 = 'interview4';

  private destroy1$ = new Subject<void>();
  private destroy2$ = new BehaviorSubject<string>('1');
  private destroy3$ = new ReplaySubject<any>();
  private destroy4$ = new AsyncSubject<any>();
  constructor(
    private _cdr: ChangeDetectorRef,
    private _zone: NgZone,
    private _http: HttpClient,
    @Optional() @SkipSelf() private intPipe: IntPipe
    ) {
    // this._cdr.detach()
    // this._cdr.checkNoChanges()
    // this._cdr.detectChanges()
    // this._cdr.reattach()
    // this._cdr.markForCheck()


    // this._zone.run(() => {
    //   console.log('1')
    // })
    //
    // this._zone.runOutsideAngular(() => {
    //   console.log('2')
    // })
  }

  ngOnInit(): void {
    this._http.get<any>('some-url')
      .pipe(
        takeUntil(this.destroy1$),
        // tap(() => ),
        // map(() => ),
        // switchMap(() => ),
        // concatMap(() => ),
        // mergeMap(() => ),
        // exhaustMap(() => ),
      )
      .subscribe(() => {
        console.log('your logic here')
      })
  }

  ngOnDestroy(): void {
    this.destroy1$.next();
    this.destroy1$.complete();
  }
}
