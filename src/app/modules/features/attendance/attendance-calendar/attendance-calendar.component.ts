import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.scss']
})
export class AttendanceCalendarComponent implements OnInit {

  constructor(private ref:ElementRef,
              private render:Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      
      // let ele = document.querySelector('.fc-daygrid-day-top');
      // console.log("leemmeme>>>>>",this.ref.nativeElement.querySelector('.fc-daygrid-day-top'));
      // let di = '<div></div>'
      // this.render.appendChild(ele,di);

      (()=>{
        var z = document.createElement('span'); // is a node
        z.innerHTML = 'test satu dua tiga';
        let ele = document.querySelectorAll('.fc-daygrid-day-top')
        ele.forEach(element => {
          element.appendChild(z);
          console.log("self invoked called>>>>>>",element);
        });
      })()
    }, 3000);


  }

  calendarVisible = true;
  calendarOptions: any = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
  }

}
