import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderDirective, ButtonDirective, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-card-subscriber',
  standalone: true,
  imports: [
    CardModule,
    BorderDirective,
    CommonModule,
    ButtonDirective
  ],
  templateUrl: './card-subscriber.component.html',
  styleUrl: './card-subscriber.component.css'
})
export class CardSubscriberComponent {
  colors  = { color: 'success', textColor: 'success' };
}
