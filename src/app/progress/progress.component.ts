import { Component, Input, OnInit } from '@angular/core';
import { DateTime, Interval } from 'luxon';
import { Timeline } from '../calendar/interfaces/timeline';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() startDate!: DateTime;
  @Input() endDate!: DateTime;
  public timeline: Timeline = {};
  public served?: number = 0;
  public total: number = 124;
  public ratio: number = 0;

  ngOnInit(): void {
    this.total = Interval.fromDateTimes(this.startDate, this.endDate).length("days");
    this.served = Number(DateTime.now().diff(this.startDate, ["days"]).toObject().days?.toFixed(0));
    this.ratio = 100 / this.total * this.served;
  }
}
