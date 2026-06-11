import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { AcercaDe } from './components/acerca-de/acerca-de';
import { Servicios } from './components/servicios/servicios';
import { Habilidades } from "./components/habilidades/habilidades";
import { Proyectos } from './components/proyectos/proyectos';
import { Contacto } from './components/contacto/contacto';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Home, AcercaDe, Servicios, Habilidades, Proyectos, Contacto, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-cristian');
}
