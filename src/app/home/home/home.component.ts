import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExcelSearchComponent } from '../excel-serach/excel-search.component';
import { InvoicesHeaderDetails } from '../../models';
import { AddInvoiceComponent } from '../add-invoice/add-invoice.component';
import { InvitePartnerComponent } from '../invite-partner/invite-partner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filter: string;
  invoiceList: InvoicesHeaderDetails[];
  columns: string[];

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.columns = COLUMNS;
    this.invoiceList = INVOICE_LIST;
  }

  openExcelSearch() {
    const excelDialog = this.matDialog.open(ExcelSearchComponent, {panelClass: 'app-dialog'});
    excelDialog.afterClosed().subscribe(res => {
      if (res) {
        console.log('Excel Search:', res);
      }
    });
  }

  customerService() {
    const customerServiceDialog = this.matDialog.open(AddInvoiceComponent, {panelClass: 'app-dialog'});
    customerServiceDialog.afterClosed().subscribe(res => {
      if (res) {
        console.log('Customer Service:', res);
      }
    });
  }

  invitePartner() {
    const invitePartnerDialog = this.matDialog.open(InvitePartnerComponent, {panelClass: 'app-dialog'});
    invitePartnerDialog.afterClosed().subscribe(res => {
      if (res) {
        console.log('Invite Partner:', res);
      }
    });
  }

}

const COLUMNS = ['file', 'receivedDateTime', 'status', 'sender', 'recipient', 'number', 'issueDate', 'dueDate', 'netSum', 'vatSum', 'totalSum'];

const INVOICE_LIST: InvoicesHeaderDetails[] = [
  {
    invoiceID: '',
    receivedDateTime: new Date(),
    status: 'Received',
    sender: 'Gold & Silver',
    recipient: 'Toys & Fun',
    number: '897765',
    issueDate: new Date(),
    dueDate: new Date(),
    netSum: 523.90,
    vatSum: 90.59,
    totalSum: 623.49
  }, {
    invoiceID: '',
    receivedDateTime: new Date(),
    status: 'EatMeat',
    sender: 'Gold & Silver',
    recipient: '',
    number: '',
    issueDate: new Date(),
    dueDate: new Date(),
    netSum: 0,
    vatSum: 0,
    totalSum: 0
  }, {
    invoiceID: '',
    receivedDateTime: new Date(),
    status: 'Rejected',
    sender: 'Gold & Silver',
    recipient: 'Office Pro',
    number: 'INV1029',
    issueDate: new Date(),
    dueDate: new Date(),
    netSum: 1045,
    vatSum: 177.65,
    totalSum: 1222.65
  }, {
    invoiceID: '',
    receivedDateTime: new Date(),
    status: '',
    sender: 'Gold & Silver',
    recipient: 'Diamond Cleaners',
    number: '97806i',
    issueDate: new Date(),
    dueDate: new Date(),
    netSum: 735,
    vatSum: 124.95,
    totalSum: 859.95
  }, {
    invoiceID: '',
    receivedDateTime: new Date(),
    status: 'Approved',
    sender: 'Gold & Silver',
    recipient: 'Coffe Break',
    number: '307',
    issueDate: new Date(),
    dueDate: new Date(),
    netSum: 65.4,
    vatSum: 9.59,
    totalSum: 65.99
  }, {
    invoiceID: '',
    receivedDateTime: new Date(),
    status: 'Paid',
    sender: 'Gold & Silver',
    recipient: 'Top 10',
    number: '8769859',
    issueDate: new Date(),
    dueDate: new Date(),
    netSum: 2576,
    vatSum: 437.92,
    totalSum: 3013.92
  },
];
