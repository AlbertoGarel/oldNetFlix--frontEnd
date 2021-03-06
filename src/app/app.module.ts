import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HeaderComponent} from './components/header/header.component';
import {GeneroComponent} from './components/genero/genero.component';
import {PopulateComponent} from './components/populate/populate.component';
import {GeneroIdComponent} from './components/genero-id/genero-id.component';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';
import {BuscadorComponent} from './components/buscador/buscador.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {ModalbuscadorComponent} from './components/modalbuscador/modalbuscador.component';
import {AngularMaterialModule} from './angular-material.module';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {RegisterComponent} from './components/register/register.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {DetailsComponent} from './components/details/details.component';
import {MatListModule} from '@angular/material/list';
import {UserprofileComponent} from './components/userprofile/userprofile.component';
import {BotondatosuserComponent} from './components/botondatosuser/botondatosuser.component';
import {DatouserComponent} from './components/datouser/datouser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GeneroComponent,
    PopulateComponent,
    GeneroIdComponent,
    BuscadorComponent,
    ModalbuscadorComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    DetailsComponent,
    UserprofileComponent,
    BotondatosuserComponent,
    DatouserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatBadgeModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [(ModalbuscadorComponent)]
})
export class AppModule {
}
