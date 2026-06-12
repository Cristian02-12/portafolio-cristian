import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-detalle.html',
  styleUrl: './proyecto-detalle.css',
})
export class ProyectoDetalle {
  // Recibe la información del proyecto seleccionado
  @Input() proyecto: any;
  
  // Emite un evento para avisarle al componente padre que debe cerrar los detalles
  @Output() volver = new EventEmitter<void>();

  cerrar() {
    this.volver.emit();
  }
}
