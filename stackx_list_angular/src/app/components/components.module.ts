//

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],

  imports: [
    CommonModule,
    MatDialogModule
  ],

  exports: [
    NavbarComponent
  ]
})

export class ComponentsModule { }
