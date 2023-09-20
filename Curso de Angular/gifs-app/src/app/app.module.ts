import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VisualizerModule } from './visualizer/visualizer.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    VisualizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
