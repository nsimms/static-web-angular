import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [AppComponent, MaintenanceComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
