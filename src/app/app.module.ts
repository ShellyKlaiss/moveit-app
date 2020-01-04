import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatExpansionModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MapComponent } from './map/map.component';
import { ResultsComponent } from './results/results.component';
import { ResultsInfoComponent } from './results-info/results-info.component';
import { MogoService } from './mogo.service';
import { QlineService } from './qline.service';
import { SmartBusService } from './smartbus.service';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapComponent,
    ResultsComponent,
    ResultsInfoComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBVUka9trkKlUo-U2P7hn3CJY_jG594Cl4' }),
    AgmDirectionModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MogoService, QlineService, SmartBusService, GoogleMapsAPIWrapper, , LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
