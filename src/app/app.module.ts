import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicbeachComponent } from './publicbeach/publicbeach.component';
import { HeaderComponent } from './header/header.component';
import { ResturantComponent } from './resturant/resturant.component';
import { LoungeComponent } from './lounge/lounge.component';
import { ModifyResturantComponent } from './modify-resturant/modify-resturant.component';
import { ModifyloungeComponent } from './modifylounge/modifylounge.component';
import { OwnerHeaderComponent } from './owner-header/owner-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicbeachComponent,
    HeaderComponent,
    ResturantComponent,
    ModifyResturantComponent,
    LoungeComponent,
    ModifyloungeComponent,
    OwnerHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
