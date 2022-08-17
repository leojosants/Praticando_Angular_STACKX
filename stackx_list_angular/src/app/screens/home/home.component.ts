//

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users/users.service';
import { IUserData } from 'src/app/shared/models/dataUser';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loading =  true;
  error = false;
  dataUser: IUserData[] = [];
  filter: any = '';
  typeFilter = '';

  searchForm = new FormGroup({
    nameStudent: new FormControl(''),
    nationality: new FormControl(''),
  });

  constructor(
    private matDiaLog: MatDialog,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    try {
      this.userService.getUsers('10').subscribe({
        next: response => this.dataUser = response.results,

        error: (error) => {
          console.log(error);
          this.error = true;
        },

        complete: () => {
          this.loading = false;
        }

      })
    } catch (error) {
      console.log(error)
    }
  }

  openModal(userSelected: IUserData) {
    const dialogRef = this.matDiaLog.open(ModalComponent, {
      minWidth: 500,

      data: {
        userData: userSelected
      },
    });
  }

  searchName(type: string) {
    this.typeFilter = type;
    this.filter = type === 'name' ? this.searchForm.get('nameStudent')!.value : this.searchForm.get('nationality')!.value;
  }

}
