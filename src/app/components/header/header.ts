import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  // Rutas Dinámicas
  menuItems = [
    { id: 'acerca-de', label: 'Acerca de', icon: 'bi bi-person-fill' },
    { id: 'servicios', label: 'Servicios', icon: 'bi bi-grid-fill' },
    { id: 'habilidades', label: 'Habilidades', icon: 'bi bi-lightning-charge-fill' },
    { id: 'proyectos', label: 'Proyectos', icon: 'bi bi-briefcase-fill' },
    { id: 'contacto', label: 'Contacto', icon: 'bi bi-envelope-fill' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detectar si bajó más de 50px para achicar el header
    this.isScrolled = window.scrollY > 50;

    // Scroll Spy: Detecta qué sección está en pantalla
    const sections = ['home', 'acerca-de', 'servicios', 'habilidades', 'proyectos', 'contacto'];
    let current = 'home';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = section;
        }
      }
    }
    this.activeSection = current;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileMenuOpen = false; // Cierra el menú al hacer click en móvil
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
