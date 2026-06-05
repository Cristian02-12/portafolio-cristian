import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca-de.html',
  styleUrl: './acerca-de.css',
})
export class AcercaDe {
  
  // Arreglo de datos para la línea de tiempo (Trayectoria)
  // Esto hace que sea dinámico y fácil de actualizar en el futuro.
  trayectoriaItems = [
    {
      estado: 'Proyecto Actual',
      titulo: 'Sistema Web Parroquia San Agustín',
      fecha: '(2025)',
      descripcion: 'Frontend Lead & Backend Support. Implementación de módulos de reservas y gestión de fieles con Angular y Spring Boot.'
    },
    {
      estado: 'Finalizado',
      titulo: 'Sistema de Gestión CSI Contratistas',
      fecha: '(2025)',
      descripcion: 'Desarrollador Web. Creación de panel administrativo para gestión de obras y materiales. Actualmente en uso.'
    },
    {
      estado: 'Grupo Intercorp',
      titulo: 'Diversos Roles (Mass/Promart/Makro)',
      fecha: '(2023 - 2025)',
      descripcion: 'Atención y Gestión. Desarrollo de habilidades interpersonales, manejo de caja y asesoría comercial.'
    },
    {
      estado: 'Formación',
      titulo: 'Universidad Tecnológica del Perú',
      fecha: '(2021 - Actualidad)',
      descripcion: 'Ingeniería de Sistemas e Informática. 8° Semestre.'
    }
  ];

}
