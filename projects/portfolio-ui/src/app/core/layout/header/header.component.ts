import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'core-header-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCollapsed: boolean = false;
  loginLogoutText = 'Login';

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  loginOrOut() {
  }
}
