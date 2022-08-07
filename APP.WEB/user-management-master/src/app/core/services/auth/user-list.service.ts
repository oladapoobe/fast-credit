import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
// SERVICES
import { ApiService, GlobalDataService } from '../common';
import { SnackMessageService } from '../notifcation';
// MODELS
import { HTTP_REQ } from '@models/common';
import { PROFILE } from '@models/auth';
import { REGISTER_FORM_DATA } from '../../../models/auth/auth-forms.model';
@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(
    private apiService: ApiService,
    private snackMessage: SnackMessageService,
    private globalDataService: GlobalDataService
  ) {}
  // LIST USERS
  async getAllUsers(): Promise<PROFILE[]> {

    const httpData: HTTP_REQ = {
      url: '/api/User/GetAll',
    
    };
    const { success, error, data } = await this.apiService.get(httpData);
    if (success && data?.length > 0) {
      return data;
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during list users profile',
      });
      return [];
    }
  }
  // ADD NEW USER
  async addNewUser(formData: REGISTER_FORM_DATA): Promise<{ success: boolean; user: PROFILE }> {
  
      // IF USER REGISTERED SUCCESSFULLY THEN CREATE PROFILE DATA
      const profileHttpData: HTTP_REQ = {
        url: '/api/User/PostUser',
        body: {

          emailAddress: formData.emailAddress,
          firstName: formData.firstName,
          lastName: formData.lastName,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          phoneNumber: formData.phoneNumber,
          nationality: formData.nationality,
          role: formData?.role,
        },
      };
      const profileResult = await this.apiService.post(profileHttpData);
      if (profileResult?.success) {
        this.snackMessage.show({
          message: `User (${formData?.firstName}) has been created`,
        });
        return { success: true, user: profileResult?.data };
      } else {
        return { success: false, user: profileResult?.data };
      }
   
  }

  async updateUser(user: PROFILE): Promise<{ success: boolean; user: PROFILE }> {
    const httpData: HTTP_REQ = {
      url: `/api/User/UpdateUser`,
      body: user,
    };
    const { success, error, data } = await this.apiService.put(httpData);
    if (success) {
      return { success: true, user: data };
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during update',
      });
      return { success: false, user: data };
    }
  }
  async deleteUser(userID: number): Promise<{ success: boolean; user: PROFILE }> {
    const httpData: HTTP_REQ = {
      url: `/api/User/DeleteUser/${userID}`,
    };
    const { success, error, data } = await this.apiService.delete(httpData);
    if (success) {
      return { success: true, user: data };
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during update',
      });
      return { success: false, user: data };
    }
  }
  // LIST USERS WITH ROLE
  private getRoleLTE(userRole: number | undefined) {
    switch (userRole) {
      // SUPER ADMIN CAN LIST ALL
      case 3:
        return 3;
      // ADMIN CAN LIST USERS
      case 2:
        return 1;
      // OTHERS CANT LIST
      default:
        return -1;
    }
  }
}


