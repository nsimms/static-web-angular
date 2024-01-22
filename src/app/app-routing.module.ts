import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component'; // Create this component

const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
  // Other routes...
  { path: '**', redirectTo: '/maintenance', pathMatch: 'full' } // Redirect all unknown routes to maintenance
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
