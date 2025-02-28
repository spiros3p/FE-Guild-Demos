import { Component, signal } from '@angular/core';
import { NewbornComponent } from '../newborn/newborn.component';

@Component({
  selector: 'app-child',
  imports: [NewbornComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  readonly showIt = signal<boolean>(false);
  readonly loadIt = signal<boolean>(false);
}
