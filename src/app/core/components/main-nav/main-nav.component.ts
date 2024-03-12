import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrl: 'main-nav.component.scss'
})
export class MainNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  visible: boolean = true;

  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public showProjectsList(): void {
    this.visible = !this.visible
  }
}
