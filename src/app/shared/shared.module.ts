import { NgModule, Component } from '@angular/core';

import { CarouselComponent } from './carousel/carousel.component';

const cmp = [
  CarouselComponent,
];

@NgModule({
  imports: [
    ...cmp
  ],
  exports: [],
  declarations: [
    ...cmp
  ],
  providers: [],
})
export class SharedModule { }
