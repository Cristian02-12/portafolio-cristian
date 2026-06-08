import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {
  
  // Categorías para los botones
  categorias = ['Todas', 'Frontend', 'Backend', 'Base de Datos', 'Herramientas'];
  categoriaActiva = 'Todas';

  // Base de datos de tus habilidades (Basado en tu CV)
  habilidades = [
    { nombre: 'Angular', categoria: 'Frontend', img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/angular-icon.png' },
    { nombre: 'JavaScript', categoria: 'Frontend', img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
    { nombre: 'HTML5', categoria: 'Frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { nombre: 'CSS3', categoria: 'Frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { nombre: 'Bootstrap', categoria: 'Frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    
    { nombre: 'Java', categoria: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { nombre: 'C#', categoria: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { nombre: 'Node.js', categoria: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { nombre: 'Spring Boot', categoria: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    
    { nombre: 'PostgreSQL', categoria: 'Base de Datos', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { nombre: 'SQL Server', categoria: 'Base de Datos', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    
    { nombre: 'Git', categoria: 'Herramientas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    // GitHub usualmente es negro, le pondremos un filtro blanco en el CSS o usamos el icono de bootstrap
    { nombre: 'GitHub', categoria: 'Herramientas', icon: 'bi bi-github' }, 
    { nombre: 'CCNA (Redes)', categoria: 'Herramientas', icon: 'bi bi-hdd-network' },
    { nombre: 'Autodesk', categoria: 'Herramientas', img: 'https://blogs.autodesk.com/presse-center-deutschland/wp-content/uploads/sites/93/2016/08/Autodesk-logo-e1468255451527.png' } 
  ];

  // Filtro reactivo para mostrar solo las habilidades correspondientes
  get habilidadesFiltradas() {
    if (this.categoriaActiva === 'Todas') {
      return this.habilidades;
    }
    return this.habilidades.filter(hab => hab.categoria === this.categoriaActiva);
  }

  // Método para cambiar la categoría al hacer clic en un botón
  seleccionarCategoria(categoria: string) {
    this.categoriaActiva = categoria;
  }
}
