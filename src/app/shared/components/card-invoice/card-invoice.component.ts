import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BorderDirective, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-card-invoice',
  standalone: true,
  imports: [
    CardModule,
    BorderDirective,
    CommonModule,
  ],
  templateUrl: './card-invoice.component.html',
  styleUrl: './card-invoice.component.css'
})
export class CardInvoiceComponent {
  @Input() color = { color: 'success', textColor: 'success' };
}
