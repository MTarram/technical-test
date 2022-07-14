import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.css'],
})
export class WeekCalendarComponent implements OnInit {
  today: Date = new Date();
  currentDay: Date = new Date();
  firstDay = new Date(
    this.currentDay.setDate(this.currentDay.getDate() - this.currentDay.getDay() + 1)
  );

  constructor() {}

  ngOnInit(): void {}

  getWeekDays(): Date[] {
    const dateList: Date[] = [];
    for (let i = 0; i <= 6; i++) {
      let newDate = new Date();
      newDate.setDate(this.firstDay.getDate() + i);
      dateList.push(newDate);
    }
    return dateList;
  }
}
