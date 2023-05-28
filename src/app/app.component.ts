import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularV16';
  quantity = signal<number>(1);
  increase(){
    this.quantity.update(value=>value+1);
  }
  decrease(){
    this.quantity.update(value=>value-1);
  }

   todos = signal([{name:'todo1',done:false},{name:'todo2',done:false},{name:'todo3',done:false}])

    mutateValue(){
      this.todos.mutate(value=>{
        value[0].name='todo1 changed';
      })
    }
}
