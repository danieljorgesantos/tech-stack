import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationSideComponent } from './_components/navigation-side/navigation-side.component';
import { ContactsComponent } from './_components/contacts/contacts.component';

// component imports


@NgModule({
  declarations: [
    AppComponent,
    NavigationSideComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ provideClientHydration() ],  // add this line
  bootstrap: [AppComponent]
})
export class AppModule { }
