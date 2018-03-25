import { Component, OnInit, Input } from '@angular/core';

import { MenuComponent } from './../menu/menu.component';

import { Dish } from './../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  providers: [DatePipe]
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    // 4. Exercise (Instructions): Angular and Promise Part 1
    // this.dish = this.dishservice.getDish(id);
    this.dishservice.getDish(id)
    .then(dish => this.dish = dish);

  }

  goBack(): void {
    this.location.back();
  }

}
