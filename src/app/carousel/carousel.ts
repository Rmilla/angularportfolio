import { Component, input,  computed, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from './Types/slide';

@Component({
  imports: [CommonModule],
  selector: 'app-carousel',
  styleUrl: './carousel.css',
  templateUrl: './carousel.html',
})
export class Carousel {
  slides = input.required<Slide[]>();
  parentWidth = input.required<number>();
  curentIndex = signal(0);
  
  slidesContainerStyle = computed(() => ({
    'width': `${this.parentWidth() * this.slides().length}px`,
    'transform': `translateX(-${this.curentIndex() * this.parentWidth()}px)`,
  }));

  getSlideStyle = (slide: Slide) => ({
    'backgroundImage': `url(${slide.logo})`,
    'width': `${this.parentWidth()}px`,
  });

  goToPreviousSlide() {
    if (this.curentIndex() > 0) {
      this.curentIndex.set(this.curentIndex() - 1);
    }
  }

  goToNextSlide() {
    if (this.curentIndex() < this.slides().length - 1) {
      this.curentIndex.set(this.curentIndex() + 1);
    }
  }
}
