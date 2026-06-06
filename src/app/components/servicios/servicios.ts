import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {  
  servicios = [
    {
      numero: '01',
      titulo: 'Desarrollo Web Full Stack',
      descripcion: 'Creación de aplicaciones web dinámicas y escalables. Me especializo en construir interfaces modernas y backends robustos que se adaptan a las necesidades del negocio.',
      icono: 'bi bi-laptop',
      tags: ['ANGULAR', 'SPRING BOOT', 'NODE.JS']
    },
    {
      numero: '02',
      titulo: 'Arquitectura de Datos',
      descripcion: 'Diseño y optimización de bases de datos relacionales. Estructuro la información para garantizar integridad, velocidad y seguridad en el manejo de grandes volúmenes de datos.',
      icono: 'bi bi-database-fill-gear',
      tags: ['SQL SERVER', 'POSTGRESQL', 'MODELING']
    },
    {
      numero: '03',
      titulo: 'Infraestructura de Redes',
      descripcion: 'Configuración y administración de entornos de red. Gracias a mi formación CCNA, aseguro que la comunicación entre sistemas sea fluida, segura y eficiente.',
      icono: 'bi bi-router-fill',
      tags: ['CCNAv7', 'SWITCHING', 'ROUTING']
    },
    {
      numero: '04',
      titulo: 'Digitalización de Procesos',
      descripcion: 'Transformo flujos de trabajo manuales en sistemas automatizados. Mi enfoque es crear herramientas que ahorren tiempo y recursos a empresas locales y organizaciones.',
      icono: 'bi bi-diagram-3-fill',
      tags: ['GESTIÓN DE OBRAS', 'SISTEMAS ADMIN']
    },
    {
      numero: '05',
      titulo: 'Diseño de Interfaces (UI/UX)',
      descripcion: 'Diseño centrado en el usuario. Utilizo herramientas como Figma para prototipar experiencias intuitivas antes de llevarlas al código, asegurando un producto visualmente atractivo.',
      icono: 'bi bi-vector-pen',
      tags: ['FIGMA', 'BOOTSTRAP', 'TAILWIND']
    },
    {
      numero: '06',
      titulo: 'Consultoría de Sistemas',
      descripcion: 'Asesoría técnica para proyectos tecnológicos. Mi experiencia en atención al cliente me permite traducir necesidades de negocio en requerimientos técnicos precisos.',
      icono: 'bi bi-people-fill',
      tags: ['PROJECT MANAGEMENT', 'SCRUM']
    }
  ];
}
