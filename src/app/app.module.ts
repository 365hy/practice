import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CertificationComponent } from './certification/certification.component';
import { WorkComponent } from './work/work.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { PlaceComponent } from './place/place.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    CertificationComponent,
    WorkComponent,
    OrganizationChartComponent,
    PlaceComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
