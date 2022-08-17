//

import { Component, OnInit } from '@angular/core';
import { IUserData } from '../../shared/models/dataUser';
import { UsersService } from '../../core/services/users/users.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

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


  constructor(
    private matDiaLog: MatDialog,
    private userService: UsersService
  ) { }

  searchForm = new FormGroup({
    nameStudent: new FormControl(''),
    nationality: new FormControl(''),
  })

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

  searchValue(type: string) {
    this.typeFilter = type;
    this.filter = type === 'name' ? this.searchForm.get('nameStudent')!.value : this.searchForm.get('nationality')!.value;
  }

}
