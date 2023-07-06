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
import { ActiveEntitiesComponent } from './components/bookings/active-entities/active-entities.component';
import { BookingService } from './components/bookings/services/booking.service';
import { BookingComponent } from './components/bookings/booking/booking.component';
import { TopBookingsComponent } from './components/bookings/top-bookings/top-bookings.component';
import { TopProfessionalsComponent } from './components/bookings/top-professionals/top-professionals.component';
import { SportCategoriesComponent } from './components/bookings/sport-categories/sport-categories.component';
import { SportPlacesComponent } from './components/bookings/sport-places/sport-places.component';
import { TopIncomeComponent } from './components/finances/top-income/top-income.component';
import { FinanceService } from './components/finances/services/finance.service';
import { CashflowComponent } from './components/finances/cashflow/cashflow.component';
import { TrafficsComponent } from './components/traffic/traffics/traffics.component';
import { TrafficService } from './components/traffic/services/traffic.service';
import { ActiveVisitorsComponent } from './components/traffic/active-visitors/active-visitors.component';
import { DemographyComponent } from './components/user-management/demography/demography.component';
import { RegisteredUsersComponent } from './components/user-management/registered-users/registered-users.component';
import { UserService } from './components/user-management/services/user.service';
import { UsersComponent } from './components/user-management/users/users.component';
import { FormatNumberPipe } from './pipes/format-number.pipe';

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
    ActiveEntitiesComponent,
    BookingComponent,
    TopBookingsComponent,
    TopProfessionalsComponent,
    SportCategoriesComponent,
    SportPlacesComponent,
    TopIncomeComponent,
    CashflowComponent,
    TrafficsComponent,
    ActiveVisitorsComponent,
    DemographyComponent,
    RegisteredUsersComponent,
    UsersComponent,
    UserManagementComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
    // UserManagementModule
  ],
  providers: [UserService, BookingService, FinanceService, TrafficService],
  bootstrap: [AppComponent]
})
export class AppModule { }
