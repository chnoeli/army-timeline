import { Component, Input } from '@angular/core';
import { Day, Month, Timeline } from './interfaces/timeline';
import { DAY_STATES, MONTH } from './interfaces/types';
import { DateTime, Duration, Interval } from "luxon";
import { getSafePropertyAccessString } from '@angular/compiler';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() startDate!: DateTime;
  @Input() endDate!: DateTime;
  public timeline: Timeline = {};
  public DAY_STATES = DAY_STATES;

  ngOnInit(): void {
    let bctInterval = Interval.fromDateTimes(this.startDate, this.endDate);
    let duration: number = bctInterval.length("days");

    let cDate = this.startDate;
    let m: Month = {
      name: cDate.monthLong
    };
    for (let index = 0; index < duration; index++) {
      if (m.name != cDate.monthLong) {
        this.timeline.months == undefined ? this.timeline.months = [{ ...m }] : this.timeline.months.push({ ...m });
        m.name = cDate.monthLong;
        delete m.days;
      }


      let d: Day = {
        day: cDate.day,
        week: cDate.weekNumber,
        dow: cDate.weekday,
        state: this.getState(cDate)
      };
      m.days == undefined ? m.days = [{ ...d }] : m.days.push({ ...d });

      cDate = cDate.plus(Duration.fromDurationLike({ day: 1 }));
    }
    this.timeline.months?.push({ ...m });
    console.log(this.timeline);

    // this.timeline = {
    //   months: [
    //     {
    //       name: MONTH.January,
    //       weeks:
    //         [
    //           {
    //             rsw: 0,
    //             days: [
    //               {
    //                 day: 1,
    //                 dow: 7,
    //                 state: DAY_STATES.disabled
    //               }

    //             ]
    //           }
    //         ]
    //     }
    //   ]
    // };
  }

  getState(date: DateTime): DAY_STATES {
    let bctInterval = Interval.fromDateTimes(this.startDate, this.endDate);
    let now: DateTime = DateTime.now();
    if (bctInterval.contains(date) && now > date) {
      return DAY_STATES.passed;
    }
    else if (bctInterval.contains(date) && now > date) {
      return DAY_STATES.open;
    }
    else {
      return DAY_STATES.disabled;
    }

  }
}
