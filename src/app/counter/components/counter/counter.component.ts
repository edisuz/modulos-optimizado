import { Component } from "@angular/core";


@Component({
    selector: 'counter-component',
    template: `
     <p>Contador: {{contador}}</p>
     <button (click)="incrementar(1)">+1</button>
     <button (click)="resetear()">Reset</button>
     <button (click)="incrementar(-1)">-1</button>
    `
})


export class CounterComponent {

    public contador: number = 20;

    public incrementar(value: number): void {
        this.contador += value
    }

    public resetear(): void {
        this.contador = 20;
    }
}
