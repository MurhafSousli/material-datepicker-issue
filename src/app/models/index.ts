export interface InvoicesHeaderDetails {
  invoiceID: string;
  receivedDateTime: Date;
  status: string;
  sender: string;
  recipient: string;
  number: string;
  issueDate: Date;
  dueDate: Date;
  netSum: number;
  vatSum: number;
  totalSum: number;
}

export interface CustomerServiceRequest {
  companyName: string;
  companyNumber: string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  invoiceNumber: string;
  requestDetails: string;
  token: string;
}
