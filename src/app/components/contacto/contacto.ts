import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {

  // TUS DATOS REALES EXTRAÍDOS DEL CV
  miWhatsapp = '51960587536'; // Código de país 51 (Perú) + número

  // CREDENCIALES DE EMAILJS (Reemplázalas con las tuyas)
  private readonly EMAILJS_SERVICE_ID = 'service_pyzw7sd';
  private readonly EMAILJS_TEMPLATE_ID = 'template_jm8hc1m';
  private readonly EMAILJS_PUBLIC_KEY = 'dkpK83GGAHYwzgw24';

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

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      if (this.metodoContacto === 'phone') {
        // --- ENVÍO POR WHATSAPP ---
        const saludo = `Hola Cristian, mi nombre es ${formData.nombre}.`;
        const contactoUser = `Mi número es: ${formData.contactoDestino}.`;
        const motivo = `Te escribo por el siguiente motivo: ${formData.tipoConsulta}.`;
        const mensajeCuerpo = `Detalle del mensaje: ${formData.mensaje}`;
        
        const textoWhatsapp = `${saludo}\n${contactoUser}\n\n${motivo}\n\n${mensajeCuerpo}`;
        const urlWhatsapp = `https://wa.me/${this.miWhatsapp}?text=${encodeURIComponent(textoWhatsapp)}`;
        
        setTimeout(() => {
          this.isSubmitting = false;
          window.open(urlWhatsapp, '_blank');
          this.mostrarMensajeExito('Redirigiendo a WhatsApp de manera segura...');
        }, 1000);

      } else {
        // --- ENVÍO POR CORREO (USANDO EMAILJS) ---
        try {
          // El objeto templateParams debe coincidir con las variables en tu plantilla de EmailJS
          const templateParams = {
            nombre: formData.nombre,
            contactoDestino: formData.contactoDestino,
            tipoConsulta: formData.tipoConsulta,
            mensaje: formData.mensaje
          };

          await emailjs.send(
            this.EMAILJS_SERVICE_ID,
            this.EMAILJS_TEMPLATE_ID,
            templateParams,
            this.EMAILJS_PUBLIC_KEY
          );

          this.isSubmitting = false;
          this.mostrarMensajeExito('El mensaje ha sido enviado directamente a tu correo.');

        } catch (error) {
          console.error('Error enviando correo:', error);
          this.isSubmitting = false;
          alert('Hubo un error enviando el mensaje. Por favor, intenta de nuevo más tarde o usa la opción de WhatsApp.');
        }
      }
    }
  }

  private mostrarMensajeExito(mensaje: string) {
    this.mensajeExito = mensaje;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
      this.contactForm.reset();
    }, 6000);
  }
}
