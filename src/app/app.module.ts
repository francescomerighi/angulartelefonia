import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CellulareComponent } from './cellulare/cellulare.component';
import { TelefoniaComponent } from './telefonia/telefonia.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CellulareComponent, TelefoniaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
