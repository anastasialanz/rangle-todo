import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  @Input() thingsToDo: string[];

  constructor(private toDoService: ToDoService) {

  }

  ngOnInit() {
    this.toDoService.getTasks().subscribe((newItems) => {
      this.thingsToDo = newItems;
    })
    //this.thingsToDo = this.toDoService.getTasks();
  }

}
