import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { ReceivedInvoicesComponent } from './received-invoices/received-invoices.component';
import { SentInvoicesComponent } from './sent-invoices/sent-invoices.component';
import { HomeComponent } from './home/home.component';
import { ExcelSearchComponent } from './excel-serach/excel-search.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InvitePartnerComponent } from './invite-partner/invite-partner.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ],
  declarations: [
    ReceivedInvoicesComponent,
    SentInvoicesComponent,
    HomeComponent,
    ExcelSearchComponent,
    AddInvoiceComponent,
    InvitePartnerComponent
  ],
  entryComponents: [
    ExcelSearchComponent,
    AddInvoiceComponent,
    InvitePartnerComponent
  ]
})
export class HomeModule {
}
