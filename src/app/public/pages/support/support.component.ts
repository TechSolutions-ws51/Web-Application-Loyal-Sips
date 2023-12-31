import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  questionText: string = ''; // Variable para almacenar el texto de la pregunta
  username: string = ''; // Variable para almacenar el nombre de usuario
  password: string = ''; // Variable para almacenar la contraseña
  preguntaEnviada: boolean = false;
  questionDetail: string = '';



  onQuestionChange(event: any) {
    // Este método se llama cuando el usuario comienza a escribir en el campo
    // Verifica si hay texto y oculta el texto de la etiqueta si es el caso
    if (event.target.value) {
      document.querySelector('label[for="question"]')?.classList.add('hidden');
    } else {
      document.querySelector('label[for="question"]')?.classList.remove('hidden');
    }

  }

  sendQuestion() {
    // Este método se llamará cuando el formulario se envíe
    // para obtener los valores ingresados por el usuario
    this.preguntaEnviada = true;
  }
}
