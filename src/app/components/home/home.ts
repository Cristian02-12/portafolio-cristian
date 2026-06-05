import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  mouseX = 0;
  mouseY = 0;

  subtitles = [
    "DESARROLLADOR FULL STACK", 
    "ESPECIALISTA EN REDES (CCNA)", 
    "CREADOR DE SOLUCIONES WEB"
  ];
  currentText = '';
  typingIndex = 0;
  charIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  // Captura el ratón solo en esta sección para la luz de fondo
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  typeEffect() {
    const currentWord = this.subtitles[this.typingIndex];
    
    if (this.isDeleting) {
      this.currentText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentText === currentWord) {
      typeSpeed = 2000; // Pausa al completar la palabra
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.typingIndex = (this.typingIndex + 1) % this.subtitles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typeSpeed);
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
