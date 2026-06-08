import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  // Lista de proyectos. 
  // 'sizeClass' define el tamaño dinámico en el Grid ('card-large' o 'card-normal')
  proyectos = [
    {
      titulo: 'CSI Contratistas',
      subtitulo: 'Sistema de Gestión de Obras',
      descripcion: 'Desarrollo de un sistema web integral para la gestión de empleados, obras y materiales. Incluye panel administrativo y página web informativa.',
      tech: ['Node.js', 'Spring Boot', 'Bootstrap', 'JS'],
      year: '2025',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      sizeClass: 'card-large' // Proyecto destacado, ocupará todo el ancho disponible en su fila
    },
    {
      titulo: 'Parroquia San Agustín',
      subtitulo: 'Sistema Web Administrativo',
      descripcion: 'Implementación de módulos para reservas de misas, donaciones, registro de fieles y gestión de eventos. Orientado a brindar un sistema funcional y confiable.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
      year: '2025',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      sizeClass: 'card-normal' // Ocupará la mitad del ancho
    },
    {
      titulo: 'Red Corporativa',
      subtitulo: 'Diseño de Infraestructura LAN/WAN',
      descripcion: 'Diseño y simulación de una red escalable aplicando protocolos de enrutamiento y conmutación basados en los estándares de Cisco Networking Academy.',
      tech: ['CCNAv7', 'Cisco IOS', 'Packet Tracer'],
      year: '2024',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
      sizeClass: 'card-normal' // Ocupará la mitad del ancho
    }
    // Puedes agregar más proyectos aquí, alternando entre 'card-large' y 'card-normal'
  ];
  
}
