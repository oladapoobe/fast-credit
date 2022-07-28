import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// EXTRA MATERIAL MODULES
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// SHARED MODULE
import { SharedModule } from '@shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
// COMPONENTS
import { PagesComponent } from './pages.component';
import { Navbar } from '@shared/components';
import { UserTable, UserModal, UserForm } from './user-list/components';

import { UserListComponent as UserListPage } from './user-list/user-list.component';

@NgModule({
  declarations: [
    PagesComponent,
    Navbar,
    UserListPage,
    UserTable,
    UserModal,
    UserForm,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
