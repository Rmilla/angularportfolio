import { Component, ElementRef, afterNextRender, inject, OnDestroy } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Slide } from '../carousel/Types/slide';

@Component({
  imports: [Carousel],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',

})
export class Content {
  slides: Slide[] = [
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' }
  ];
  private observer?: IntersectionObserver;
  private host = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('apparition', entry.isIntersecting);
        });
      }, { threshold: 0.15 });
      this.host.nativeElement.querySelectorAll('section').forEach((el: Element) => {
        this.observer?.observe(el);
      });
    });
  }


}

