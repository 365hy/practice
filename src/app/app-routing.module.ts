import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationComponent } from './certification/certification.component';
import { PlaceComponent } from './place/place.component';
import { WorkComponent } from './work/work.component';
import { IndexComponent } from './index/index.component';
import { OrganizationChartComponent } from "./organization-chart/organization-chart.component";
import { IntroduceComponent } from "./introduce/introduce.component";

const routes: Routes = [
  { path: 'certification', component: CertificationComponent },
  { path: 'place', component: PlaceComponent },
  { path: "work", component: WorkComponent },
  { path: "", component: IndexComponent },
  { path: "organization-chart", component: OrganizationChartComponent },
  { path: "introduce", component: IntroduceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
