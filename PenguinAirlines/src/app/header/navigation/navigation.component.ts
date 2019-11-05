import { Component, OnInit } from '@angular/core';
import { navItem } from './listItem';
import { navItemsLeft, navItemsRight } from './mock-listItems';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navItemLeft: navItem[] = navItemsLeft;
  navItemRight: navItem[] = navItemsRight;
}
