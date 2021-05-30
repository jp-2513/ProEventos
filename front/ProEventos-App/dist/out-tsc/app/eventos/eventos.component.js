import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EventosComponent = class EventosComponent {
    constructor() { }
    ngOnInit() {
        this.getEventos();
    }
    getEventos() {
        this.eventos =
            [
                {
                    Tema: 'Angular',
                    Local: 'Belo Honrizonte'
                },
                {
                    Tema: 'Dotnet',
                    Local: 'Betim'
                },
                {
                    Tema: 'Angular 11',
                    Local: 'São paulo'
                },
                {
                    Tema: 'Full stack web',
                    Local: 'Rio de janeiro'
                }
            ];
    }
};
EventosComponent = __decorate([
    Component({
        selector: 'app-eventos',
        templateUrl: './eventos.component.html',
        styleUrls: ['./eventos.component.scss']
    })
], EventosComponent);
export { EventosComponent };
//# sourceMappingURL=eventos.component.js.map