import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AutofocusDirective } from './autofocus.directive'
import { AppComponent } from './app.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoItemComponent } from './todo-item/todo-item.component'

@NgModule({
  declarations: [
    AutofocusDirective,
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
