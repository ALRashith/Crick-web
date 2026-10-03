import { Component } from '@angular/core';
import { ApiServiceService } from '../../../core/services/api-service.service';

@Component({
  selector: 'app-match-details',
  standalone: true,
  imports: [],
  templateUrl: './match-details.component.html',
  styleUrl: './match-details.component.scss'
})
export class MatchDetailsComponent {
  constructor (public dataService: ApiServiceService) {

  }

  
}
