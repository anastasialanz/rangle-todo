import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private toDoService: ToDoService) {

  }

  onNewItem(item: string) {
    this.toDoService.addItem(item);
  }

}
