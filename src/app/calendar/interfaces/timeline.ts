import { DateTime } from "luxon";
import { DAY_STATES } from "./types";

export interface Timeline {
  months?: Month[]
};

export interface Month {
    name: string,
    days?: Day[]

};

export interface Week {
  rsw?: number;
  days: Day[]
}

export interface Day {
  day: number;
  week: number
  dow: number;
  state: DAY_STATES;
}
