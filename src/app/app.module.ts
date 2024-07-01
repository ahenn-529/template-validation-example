import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EmailValidatorDirective } from './email-validator.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TemplateEmailExampleComponent } from './template-email-example/template-email-example.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    TemplateEmailExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
