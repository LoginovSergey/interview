import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntPipe } from './int.pipe';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    IntPipe,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
