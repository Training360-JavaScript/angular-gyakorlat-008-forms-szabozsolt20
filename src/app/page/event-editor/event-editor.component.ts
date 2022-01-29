import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { FormGroup, NgForm } from '@angular/forms';
//import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  // 1. Kiolvasni az id paramétert az URL-ből.
  // 2. Ezzel a paraméterrel meghívni az EventService.get metódust.
  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap(params => this.eventService.get(params['id']))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router

  ) { }
  // ezt a sort kikommentelve sem viselte el a teszt a konstruktorban:
   // private notifyService : NotificationService

  ngOnInit(): void { }


  onUpdate(eventForm: NgForm, event: Event) {

    if (event.id === 0) {
      this.eventService.create(event);
    } else {
      this.eventService.update(event);
    }
    //eventForm.controls['btn'].disable();
    let btn = document.querySelector('#btn');
    btn?.setAttribute('disabled', 'true');
    //this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com");
    //https://www.tutsmake.com/angular-11-toaster-notification-example/
  }


}
