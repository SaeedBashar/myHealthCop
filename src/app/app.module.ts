import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { MapComponent } from './components/map/map.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { FinancesComponent } from './components/finances/finances.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserService } from './components/user-management/services/user.service';
import { UsersComponent } from './components/user-management/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    StatisticsComponent,
    UserManagementComponent,
    MapComponent,
    BookingsComponent,
    FinancesComponent,
    TrafficComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
