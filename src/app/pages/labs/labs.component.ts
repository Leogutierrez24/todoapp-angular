import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent
{
  title = 'todoapp';

  welcome = "Hola";

  tasks = signal([
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear Componentes",
  ]);

  name = signal("Leonel");

  public age: number = 15;

  disabled = true;

  image = "https://i.pinimg.com/236x/ef/80/78/ef8078c6d24bce289031308fae9153c2.jpg";

  person = signal({
    name: "Leonel",
    age: 15,
    avatar: "https://i.pinimg.com/236x/ef/80/78/ef8078c6d24bce289031308fae9153c2.jpg",
  });

  colorCtrl = new FormControl();

  constructor()
  {
    this.colorCtrl.valueChanges.subscribe(value =>
    {
      console.log(value);
    });
  }

  clickHandler()
  {
    alert("Hola");
  }

  onChangeInput(e: Event)
  {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  onKeydownInput(e: KeyboardEvent)
  {
    const input = e.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event)
  {
    const input = event.target as HTMLInputElement;
    const newAge = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newAge),
      };
    });
  }

  changeName(event: Event)
  {
    const input = event.target as HTMLInputElement;
    const newName = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newName
      }
    });
  }
}
