import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo";
// import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: any;

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v: { completed: boolean; }, i: number) => {
      if (i == id) {
        v.completed = !v.completed
      }
      return v;
    })
  }
  deleteTodo (id:number) {
    console.log(id, this.todos)
    this.todos = this.todos.filter((v: { completed: boolean; }, i: number) => i !== id);
  }
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }

}
