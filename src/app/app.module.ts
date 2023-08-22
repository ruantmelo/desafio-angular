import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TableNameFrequencyComponent } from './table-name-frequency/table-name-frequency.component';
import { NameService } from './name.service';
import { AppRoutingModule } from './app-routing.module';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableNameFrequencyComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
