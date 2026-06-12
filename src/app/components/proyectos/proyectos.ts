import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoDetalle } from './proyecto-detalle/proyecto-detalle';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, ProyectoDetalle],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  
  // Variable para controlar qué proyecto se está viendo en detalle
  proyectoSeleccionado: any = null;

  // Lista de proyectos. 
  proyectos = [
    {
      titulo: 'CSI Contratistas',
      subtitulo: 'Sistema de Gestión de Obras',
      descripcion: 'Desarrollo de un sistema web integral para la gestión de empleados, obras y materiales. Incluye panel administrativo y página web informativa.',
      tech: ['Node.js', 'Spring Boot', 'Bootstrap', 'JS'],
      year: '2025',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      sizeClass: 'card-large',

      detalles: {
        rol: 'Desarrollador Full Stack',
        reto: 'La empresa constructora llevaba el control de sus obras, personal y materiales de forma manual mediante hojas de cálculo, lo que generaba pérdida de información, retrasos en la asignación de recursos y falta de visibilidad del progreso en tiempo real.',
        solucion: 'Se diseñó e implementó una plataforma web centralizada. Por un lado, un panel administrativo seguro donde la gerencia puede gestionar el inventario y asignar personal a proyectos específicos. Por otro lado, una landing page corporativa para mejorar su presencia digital.',
        caracteristicas: [
          'Módulo de autenticación y roles de usuario (Administrador/Empleado).',
          'Gestión de inventario de materiales en tiempo real.',
          'Asignación dinámica de personal a múltiples obras.',
          'Panel de métricas y exportación de reportes de avance.'
        ],
        enlaces: {
          github: 'https://github.com/tu-usuario/csi-contratistas',
          demo: 'https://csicontratistas.com' // Opcional
        }
      }
    },
    {
      titulo: 'Parroquia San Agustín',
      subtitulo: 'Sistema Web Administrativo',
      descripcion: 'Implementación de módulos para reservas de misas, donaciones, registro de fieles y gestión de eventos. Orientado a brindar un sistema funcional y confiable.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
      year: '2025',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      sizeClass: 'card-normal',

      detalles: {
        rol: 'Frontend Lead & Backend Support',
        reto: 'Modernizar la administración parroquial. Los procesos de reserva de misas y el registro histórico de donaciones y fieles dependían de libros físicos, dificultando la búsqueda rápida de información y la transparencia financiera.',
        solucion: 'Desarrollo de un sistema modular y accesible para usuarios de todas las edades. Se implementó una base de datos relacional robusta en PostgreSQL para garantizar la integridad de los datos históricos y un frontend intuitivo en Angular.',
        caracteristicas: [
          'Sistema de calendario interactivo para reserva de misas y sacramentos.',
          'Módulo seguro para el registro y seguimiento de donaciones.',
          'Base de datos relacional optimizada para consultas rápidas.',
          'Interfaz completamente responsiva (Mobile First).'
        ],
        enlaces: {
          github: 'https://github.com/tu-usuario/parroquia-san-agustin',
          demo: null
        }
      }
    },
    {
      titulo: 'Red Corporativa',
      subtitulo: 'Diseño de Infraestructura LAN/WAN',
      descripcion: 'Diseño y simulación de una red escalable aplicando protocolos de enrutamiento y conmutación basados en los estándares de Cisco Networking Academy.',
      tech: ['CCNAv7', 'Cisco IOS', 'Packet Tracer'],
      year: '2024',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
      sizeClass: 'card-normal',

      detalles: {
        rol: 'Especialista en Redes',
        reto: 'Una empresa en expansión requería conectar de forma segura su sede principal con múltiples sucursales remotas, asegurando alta disponibilidad, segmentación de departamentos y protección contra accesos no autorizados.',
        solucion: 'Aplicando los conocimientos de la certificación CCNAv7, se diseñó una topología de red completa en Packet Tracer. Se configuraron VLANs para aislar el tráfico de los departamentos, OSPF para enrutamiento dinámico y ACLs para seguridad.',
        caracteristicas: [
          'Diseño de topología jerárquica (Capa de Acceso, Distribución y Núcleo).',
          'Configuración avanzada de Switches y Routers (VLANs, Trunking, STP).',
          'Implementación de enrutamiento dinámico (OSPF/EIGRP).',
          'Políticas de seguridad mediante Listas de Control de Acceso (ACL).'
        ],
        enlaces: {
          github: null,
          demo: null
        }
      }
    }
  ];
  
  // Métodos para abrir y cerrar el detalle
  verDetalle(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    // Opcional: Hacer scroll hacia arriba suavemente al abrir el detalle
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  }

  cerrarDetalle() {
    this.proyectoSeleccionado = null;
  }
}
