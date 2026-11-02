import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeSerieComponent } from './personaje-serie-component';

describe('PersonajeSerieComponent', () => {
  let component: PersonajeSerieComponent;
  let fixture: ComponentFixture<PersonajeSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonajeSerieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajeSerieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
