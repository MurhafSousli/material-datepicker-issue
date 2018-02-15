import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  // {
  //   path: 'add',
  //   loadChildren: './add-invoice/add-invoice.module#AddInvoiceModule',
  // },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
