import { Component } from '@angular/core';
import { DateTime } from "luxon";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'army-calendar';
  rsstarts = {
    '2302': {
      start: DateTime.fromISO("2023-07-03"),
      end: DateTime.fromISO("2023-11-04")
    },
    '2401': {
      start: DateTime.fromISO("2024-01-15"),
      end: DateTime.fromISO("2024-05-18")
    },
    '2402':
    {
      start: DateTime.fromISO("2024-07-01"),
      end: DateTime.fromISO("2024-11-02")
    },
  };

  startDate: DateTime = this.rsstarts[2302].start;
  endDate: DateTime = this.rsstarts[2302].end;
}
