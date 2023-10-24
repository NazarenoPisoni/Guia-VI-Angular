import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from './components/client-list/client-list.component';
import { HomeClientePageComponent } from './pages/home-cliente-page/home-cliente-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAddComponent,
    ClientListComponent,
    HomeClientePageComponent,
    NavbarComponent,
    NuevoClientePageComponent,
    ClientEditComponent,
    EditarClientePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
