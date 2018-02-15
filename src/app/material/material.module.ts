import { NgModule } from '@angular/core';
import {
  MatDialogModule, MatInputModule, MatTableModule, MatButtonModule, MatTabsModule, MatIconModule,
  MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatRadioModule
} from '@angular/material';
import { InputFileComponent } from './file-input/input-file.component';

const MATERIAL = [
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    InputFileComponent
  ],
  imports: MATERIAL,
  exports: [
    ...MATERIAL,
    InputFileComponent
  ]
})
export class MaterialModule {
}
