import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-emom-timer',
  templateUrl: './emom-timer.component.html',
  imports: [CommonModule],  // Include CommonModule to use *ngIf
  styleUrls: ['./emom-timer.component.css']
})
export class EmomTimerComponent {
  secondsLeft = 60;
  timerRunning = false;
  intervalId: any;

  startTimer() {
    if (this.timerRunning) return; // Prevent multiple timers

    this.timerRunning = true;
    this.secondsLeft = 60;

    this.intervalId = setInterval(() => {
      this.secondsLeft--;

      if (this.secondsLeft === 0) {
        clearInterval(this.intervalId);
        this.timerRunning = false;
        // You can trigger a bell or next round logic here later
      }
    }, 1000);
  }
}
