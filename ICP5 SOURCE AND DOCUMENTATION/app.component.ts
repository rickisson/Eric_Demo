import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** my to do list items showing their priority and label**/
export class AppComponent {
  title = 'My-Todo-List';
  todos = [
    {
      label: 'Pay rent',
      done: false,
      priority: 5
    },
    {
      label: 'Grocery',
      done: true,
      priority: 4
    },
    {
      label: 'Homework',
      done: false,
      priority:6
    },
    {
      label:'Laundry',
      done: true,
      priority: 3
    }
  ];
/** function to add new items to to do list**/
  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
/** function to delete executed items from to do list **/
  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }


}
