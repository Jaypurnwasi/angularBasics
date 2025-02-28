import { Component,inject,Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLocation?.city}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute)
  housingServise = inject(HousingService)
  housingLocation : HousingLocation|undefined;
  constructor (){
    const housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingLocation = this.housingServise.getHousingLocationById(housingLocationId)
    
  }

}
