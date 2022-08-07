import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { PROFILE } from 'src/app/model/auth';
import { GlobalDataService } from 'src/app/service/common';
import { FormValidationService } from 'src/app/service/form';

// SERVICES


@Component({
  selector: 'user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.scss'],
})
export class UserFromComponent implements OnInit {
  @Input() userData!: PROFILE;
  readonly userRoles = [
    { val: 0, viewVal: 'Customer' },
    { val: 1, viewVal: 'Admin' },
  ];
  currentUser: PROFILE | null = this.globalData.currentUser$.getValue();
  // SHOW AND HIDE PW FOR USER EXPERIENCE
  showPassword: boolean = false;
  // USER FORM GROUP
  userForm!: FormGroup;
  constructor(
    private formValidationService: FormValidationService,
    private globalData: GlobalDataService
  ) {
    // INIT USER FORM
  }

  ngOnInit(): void {
    this.userForm = this.inituserForm;
  }
  // GET USER FORM DATA
  get getFormData() {
    return { ...this.userForm.value, role: this.userForm.value?.role || 1 };
  }
  // USER FORM PROPERTIES
  private get inituserForm() {

    return new FormGroup(
      {
        firstName: new FormControl(this.userData?.firstName || '', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ]),
        lastName: new FormControl(this.userData?.lastName || '', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ]),
        gender: new FormControl(this.userData?.gender || '', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ]),
        nationality: new FormControl(this.userData?.nationality || '', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ]),
        phoneNumber: new FormControl(this.userData?.phoneNumber || '', [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),

        dateOfBirth: new FormControl(this.userData?.dateOfBirth || '', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ]),
        emailAddress: new FormControl(
          {
            value: this.userData?.emailAddress || '',
            //! EMAIL CANT BE CHANGE BECAUSE OF USED TO AUTH
            disabled: this.userData ? true : false,
          },
          [
            Validators.required,
            Validators.email,
            Validators.minLength(5),
            Validators.maxLength(30),
          ]
        ),
        role: new FormControl(this.userData?.role || '', []),
       
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }
  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.userForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.userForm);
  }
}
