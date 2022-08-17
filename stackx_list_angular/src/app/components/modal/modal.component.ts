//

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  userData = {
    gender: '',

    name: {
      title: '',
      first: '',
      last: '',
    },

    email: '',

    dob: {
      date: '',
      age: 0,
    },

    cell: '',

    picture: {
      thumbnail: ''
    },
  };

  constructor(

    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>) {

    if (data) {
      this.userData = data.userData;
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
