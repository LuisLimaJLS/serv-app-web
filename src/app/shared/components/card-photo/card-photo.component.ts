import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BorderDirective, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-card-photo',
  standalone: true,
  imports: [
    CardModule,
    BorderDirective,
    CommonModule,
  ],
  templateUrl: './card-photo.component.html',
  styleUrl: './card-photo.component.css'
})
export class CardPhotoComponent {
  @Input() color = { color: 'success', textColor: 'success' };
}
