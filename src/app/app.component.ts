import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { BigCardComponent } from './components/big-card/big-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent,BigCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
}
