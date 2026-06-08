import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {

  miCorreo = 'cristianelinsonolanorodriquez@gmail.com';
  miWhatsapp = '51960587536'; // Código de país 51 (Perú) + número

  contactForm!: FormGroup;
  metodoContacto: 'email' | 'phone' = 'email';
  isAvailable = true;
  isSubmitting = false;
  showSuccess = false;
  mensajeExito = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      contactoDestino: ['', [Validators.required, Validators.email]],
      tipoConsulta: ['', Validators.required],
      mensaje: ['', [Validators.required, this.wordCountValidator(800)]]
    });
  }

  wordCountValidator(maxWords: number) {
    return (control: AbstractControl) => {
      if (!control.value) return null;
      const wordCount = control.value.trim().split(/\s+/).filter((word: string) => word.length > 0).length;
      return wordCount > maxWords ? { maxWords: true } : null;
    };
  }

  get currentWordCount(): number {
    const text = this.contactForm.get('mensaje')?.value || '';
    return text.trim().split(/\s+/).filter((word: string) => word.length > 0).length;
  }

  setContactMethod(method: 'email' | 'phone') {
    this.metodoContacto = method;
    const destControl = this.contactForm.get('contactoDestino');
    
    destControl?.clearValidators();
    if (method === 'email') {
      destControl?.setValidators([Validators.required, Validators.email]);
    } else {
      destControl?.setValidators([Validators.required, Validators.pattern(/^[0-9]{1,9}$/)]);
    }
    
    destControl?.updateValueAndValidity();
    destControl?.setValue('');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      // 1. Construir el mensaje base que vas a recibir
      const saludo = `Hola Cristian, mi nombre es ${formData.nombre}.`;
      const contactoUser = `Mi contacto es: ${formData.contactoDestino}.`;
      const motivo = `Te escribo por el siguiente motivo: ${formData.tipoConsulta}.`;
      const mensajeCuerpo = `Detalle del mensaje: ${formData.mensaje}`;

      // 2. Redirección dependiendo del método seleccionado
      setTimeout(() => {
        this.isSubmitting = false;
        
        if (this.metodoContacto === 'phone') {
          // Generar enlace a WhatsApp
          const textoWhatsapp = `${saludo}\n${contactoUser}\n\n${motivo}\n\n${mensajeCuerpo}`;
          const urlWhatsapp = `https://wa.me/${this.miWhatsapp}?text=${encodeURIComponent(textoWhatsapp)}`;
          window.open(urlWhatsapp, '_blank'); // Abre en nueva pestaña
          
          this.mensajeExito = 'Redirigiendo a WhatsApp de manera segura...';
        } else {
          // Generar enlace a Correo (mailto)
          const asunto = `Nueva Consulta de Portafolio: ${formData.tipoConsulta}`;
          const textoCorreo = `${saludo}\n${contactoUser}\n\n${motivo}\n\n${mensajeCuerpo}`;
          const urlCorreo = `mailto:${this.miCorreo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(textoCorreo)}`;
          window.location.href = urlCorreo; // Abre el gestor de correo predeterminado
          
          this.mensajeExito = 'Abriendo tu gestor de correo electrónico...';
        }

        // Mostrar UI de éxito
        this.showSuccess = true;
        
        // Resetear formulario después de unos segundos
        setTimeout(() => {
          this.showSuccess = false;
          this.contactForm.reset();
        }, 6000);

      }, 1000); // Pequeña espera para animación del botón
    }
  }
}
