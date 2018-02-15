import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { InputFileComponent } from '../material/file-input/input-file.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  declarations: [
    PdfViewerComponent
  ]
})
export class SharedModule { }
