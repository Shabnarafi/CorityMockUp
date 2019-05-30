import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { EllipsesPipe } from './ellipsePipe';
import { FooterComponent } from './footer/footer.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    ContentComponent,
    HeaderComponent,
    EllipsesPipe,
    FooterComponent,
    AddNewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
