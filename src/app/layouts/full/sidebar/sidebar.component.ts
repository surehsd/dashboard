import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  navList: any;
  test:any;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.navList = [
      
      {
        heading: 'Main Item',
        icon: 'settings',
        link: 'table',
        pages: [
          {
            heading: 'Sub Item1',
            link: 'buttons',
            icon: '',
            pages: []
          }
        ]
      },
      {
        heading: 'Main Item2',
        icon: 'dashboard',
        link: '/settings',
        pages: [
          {
            heading: 'Sub Item2',
            link: 'chips',
            icon: '',
            pages: [
              {
                heading: 'Sub Sub Item2',
                icon: 'settings',
                link: 'table',
                pages: []
              }
            ]
          }
        ]
      },
      {
        heading: 'Main Item3',
        icon: 'settings',
        link: 'lists',
        pages: [
          {
            heading: 'Sub Item3',
            link: 'lists',
            icon: '',
            pages: []
          }
        ]
      }
    ];

    this.test = [{
      state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer'
    }];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
