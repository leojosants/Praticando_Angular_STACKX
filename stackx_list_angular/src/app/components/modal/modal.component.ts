//

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  message: string = "";
  cancelButtonText = "Cancel";

  constructor(

    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>) {

    if (data) {
      console.log(data);
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
