import { Component } from '@angular/core';
import { ApiServiceService } from '../../../core/services/api-service.service';

@Component({
  selector: 'app-match-list',
  standalone: true,
  imports: [],
  templateUrl: './match-list.component.html',
  styleUrl: './match-list.component.scss'
})
export class MatchListComponent {

  constructor(public dataService: ApiServiceService) {

  }
  ngOnInit() {
    this.apiCall();
  }

  private async apiCall() {
    const data = await this.dataService.getList().subscribe(
      {
        next: (response) => {
          console.log('Data received:', response);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        },
        complete: () => {
          console.log('Request completed');
        }
      }
    )
  }
  
}
