import {
  Component,
  computed,
  effect,
  input,
  Input,
  signal,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  // ///////////////////////
  // Input decorator
  // ///////////////////////

  // @Input() count: number | undefined;
  // constructor() {
  // this.count = input(3);
  // this.count = 3
  // }

  // @Input({ required: true }) count: number | undefined;

  // @Input() set count(v: number | undefined) {
  //   // use some function here for v
  //   // e.g., v = v * 2
  //   this._count = v as number * 2;
  // }
  // get count() {
  //   return this._count;
  // }
  // private _count: number | undefined;

  // ///////////////////////
  // Signal input function
  // ///////////////////////

  count = input<number>();
  // count = input.required<number>();

  // newCount = computed(() => {
  //   // use some function here for v
  //   // e.g., v = v * 2
  //   console.log(this.count());
  //   return (this.count() as number) * 2;
  // });

  // newCount: any;
  constructor() {
    effect(() => {
      console.log(this.count());
      // this.newCount = (this.count() as number) * 2;
    });
  }
}
