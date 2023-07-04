import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { MapComponent } from './components/map/map.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { FinancesComponent } from './components/finances/finances.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    StatisticsComponent,
    UserManagementComponent,
    MapComponent,
    BookingsComponent,
    FinancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
