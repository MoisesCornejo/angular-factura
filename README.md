# Facturas

Proyecto donde utilizamos `Angular` con `Tailwindcss` y `DaisyUI`. Dividimos en subcomponente los componentes de una factura y los comunicamos entre sí.

## Métodos y Directivas Utilizadas
### Métodos en TypeScript

1. **OnInit**:
  - Método de la interfaz `OnInit` que se ejecuta una vez que Angular ha inicializado completamente las propiedades enlazadas a datos de un componente.
  - Ejemplo:
    ```typescript
    import { OnInit } from '@angular/core';

    export class ExampleComponent implements OnInit {
      ngOnInit(): void {
        // Lógica de inicialización
      }
    }
    ```
2. **EventEmitter**:
  - Clase utilizada para emitir eventos desde un componente hijo hacia un componente padre.
  - Ejemplo:
    ```typescript
    import { EventEmitter, Output } from '@angular/core';

    export class ExampleComponent {
      @Output() eventEmitter: EventEmitter<string> = new EventEmitter();

      emitEvent(): void {
        this.eventEmitter.emit('Evento emitido');
      }
    }
    ```

### Directivas en HTML

1. **(click)**:
  - Directiva utilizada para asignar un evento de clic a un elemento del DOM.
  - Ejemplo:
    ```html
    <button (click)="onRemove(item.id)">Eliminar</button>
    ```

2. **@Input()**:
  - Decorador utilizado para recibir datos desde un componente padre.
  - Ejemplo:
    ```typescript
    import { Input } from '@angular/core';

    export class ExampleComponent {
      @Input() data!: string;
    }
    ```

3. **@Output()**:
  - Decorador utilizado para emitir eventos desde un componente hijo hacia un componente padre.
  - Ejemplo:
    ```typescript
    import { Output, EventEmitter } from '@angular/core';

    export class ExampleComponent {
      @Output() eventEmitter: EventEmitter<string> = new EventEmitter();
    }
    ```

4. **ngModel**:
  - Directiva utilizada para el enlace bidireccional de datos entre el formulario y el componente.
  - Ejemplo:
    ```html
    <input [(ngModel)]="item.product" required minlength="3">
    ```

5. **ngSubmit**:
  - Directiva utilizada en el formulario para capturar el evento de envío del formulario y ejecutar un método en el componente.
  - Ejemplo:
    ```html
    <form (ngSubmit)="onSubmit(itemForm)" #itemForm="ngForm">
    ```

6. **ngForm**:
  - Directiva utilizada para trabajar con formularios en Angular.
  - Ejemplo:
    ```html
    <form #itemForm="ngForm">
    ```

7. **@if** y **@else**:
   - Directivas utilizadas para mostrar u ocultar elementos en el DOM basado en una condición.
   - Ejemplo:
   ```html
   @if (price.errors!['min']) {
     <div class="toast">
       <div class="alert alert-error h-8 flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
         </svg>
         <span>Precio minimo de $1.000</span>
       </div>
     </div>
   } @else if (price.errors!['max']) {
     <div class="toast">
       <div class="alert alert-error h-8 flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
         </svg>
         <span>Precio maximo de $100.000</span>
       </div>
     </div>
   }
    ```

8. **@for**:
   - Directiva utilizada para iterar sobre una colección y renderizar un elemento para cada ítem en la colección.
   - Ejemplo:
     ```html
     @for (item of items; track $index) {
        <tr class="table-row hover:bg-gray-200"
            app-row-item [item]="item"
            (removeEventEmitter)="onRemove($event)"></tr>
     }
     ```
