import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const materialModules: any = [
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [...materialModules]
})
export class MaterialModule { }
