import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
    selector: 'app-match-setup',
    imports: [HeaderComponent, RouterLink],
    templateUrl: './match-setup.component.html',
    styleUrl: './match-setup.component.scss'
})
export class MatchSetupComponent {}
