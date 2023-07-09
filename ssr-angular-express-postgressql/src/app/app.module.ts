import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// component imports
import { AppComponent } from './app.component';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';
import { ContactsComponent } from './contacts/contacts.component';

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
