import { Component } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Things to Do';
  thingsCompleted = [
    'Learn TypeScript'
  ];

  constructor(private toDoService: ToDoService) {

  }

  onNewItem(item: string) {
    this.toDoService.addItem(item);
  }

  // summary(): string {
  //   return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  // }
}
