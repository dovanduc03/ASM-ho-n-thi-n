import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { canActivateGuard } from './can-activate.guard';
import { childGuard } from './child.guard';
import { deactivateGuard } from './deactivate.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [canActivateGuard]
    },
    {
        path: 'list',
        component: ListComponent,
        title: 'List',
        //guardType: [tenGuard]
        canActivate: [canActivateGuard] //kiểm tra có được truy cập route hay ko?
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create',
        canActivate: [canActivateGuard] //kiểm tra xem ng dùng có được rời khỏi route hay ko?
    },
    {
        path: 'detail/:project',
        component: DetailComponent,
        title: 'Detail',
    },
    {
        path: 'edit/:project',
        component: EditComponent,
    },
    {
        path: 'admin',
        // canActivateChild: [childGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'projects',
                children: [
                    {
                        path: 'list',
                        component: ListComponent,
                    },
                    {
                        path: 'create',
                        component: CreateComponent,
                    },
                    {
                        path: 'edit',
                        component: EditComponent,
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
