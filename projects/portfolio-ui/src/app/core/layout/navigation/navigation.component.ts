import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'core-navigation-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
