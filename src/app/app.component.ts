import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmomTimerComponent } from './emom-timer/emom-timer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmomTimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emom-timer';
}
