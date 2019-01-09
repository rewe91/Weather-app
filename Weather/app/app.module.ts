import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { RoutingModule } from './routing1.module';

import { OverviewComponent } from './overview.component';
import { DetailComponent } from './detail.component';
import { TempConverter } from './tempconverter.pipe';

// importerar och deklarerar samtliga filer.

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailComponent,
    TempConverter

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    JsonpModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
