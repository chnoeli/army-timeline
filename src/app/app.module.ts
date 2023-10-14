import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DayComponent } from './components/day/day.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProgressComponent } from './progress/progress.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    CalendarComponent,
    ProgressComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
