/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { PalestrantesComponent } from './palestrantes.component';
describe('PalestrantesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PalestrantesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PalestrantesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=palestrantes.component.spec.js.map