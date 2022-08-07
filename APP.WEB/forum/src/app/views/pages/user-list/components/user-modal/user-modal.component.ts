import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PROFILE } from 'src/app/model/auth';
import { UserListService } from 'src/app/service/auth';

// MODELS

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  constructor(
    private userListService: UserListService,
    private dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PROFILE
  ) {}
  async save(formData: any) {
    const { success, user } = this.data
      ? await this.userListService.updateUser({
          ...this.data,
        firstName: formData?.firstName,
        role: formData?.role,
        emailAddress: formData?.emailAddress,
        lastName: formData?.lastName,
        dateOfBirth: formData?.dateOfBirth,
        gender: formData?.gender,
        phoneNumber: formData?.phoneNumber,
        nationality: formData?.nationality,
       
         
        })
      : await this.userListService.addNewUser(formData);
    if (success) {
      this.dialogRef.close({ success: true, userData: user });
    }
  }
  ngOnInit(): void {}
}
