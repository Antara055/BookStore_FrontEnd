import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BooksComponent } from './component/books/books.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate:[AuthenticationGuard],
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'quickview',component:QuickViewComponent}
    ]
  }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
