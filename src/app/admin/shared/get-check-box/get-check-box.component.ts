import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-get-check-box',
  templateUrl: './get-check-box.component.html',
  styleUrls: ['./get-check-box.component.scss']
})
export class GetCheckBoxComponent {

  task: Task = {
    name: 'Усі категорії',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Title', completed: false, color: 'primary'},
      {name: 'Tag', completed: false, color: 'accent'},
    ]
  };

  allComplete = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}
