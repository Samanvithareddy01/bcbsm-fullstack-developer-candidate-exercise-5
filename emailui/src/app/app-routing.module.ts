import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentComponent } from './attachment/attachment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'attachment',
  component: AttachmentComponent,
  // canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
