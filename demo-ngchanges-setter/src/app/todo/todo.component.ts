import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnChanges {
  // ///////////////////////
  // Setter Input
  // ///////////////////////

  @Input() set count(v: number) {
    console.log(v);
  }
  // @Input() set todo(v: string) {
  //   console.log(v);
  // }

  // this._count = v;
  // _count: number | undefined;

  // get count() {
  //   return this._count;
  // }

  // ///////////////////////
  // NgOnChanges Input
  // ///////////////////////

  // @Input() count: number | undefined;
  // @Input() todo: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      console.log(changes['count'].currentValue);
    }
    // if (changes['todo']) {
    //   console.log(changes['todo'].currentValue);
    // }
  }
}
