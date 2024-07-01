import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEmailExampleComponent } from './template-email-example.component';

describe('TemplateEmailExampleComponent', () => {
  let component: TemplateEmailExampleComponent;
  let fixture: ComponentFixture<TemplateEmailExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateEmailExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateEmailExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
