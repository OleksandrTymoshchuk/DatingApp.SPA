import { MemberListResolver } from './_resolvers/member-list.relosver';
import { MemberDetailResolver } from './_resolvers/member-detail.relosver';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthService } from './_services/auth.service';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';

export const appRoutes: Routes = [
         { path: 'home', component: HomeComponent },
         {
           path: '',
           runGuardsAndResolvers: 'always',
           canActivate: [AuthGuard],
           children: [
             {
               path: 'members',
               component: MemberListComponent,
               resolve: { users: MemberListResolver }
             },
             {
               path: 'members/:id',
               component: MemberDetailComponent,
               resolve: { user: MemberDetailResolver }
             },
             { path: 'messages', component: MessagesComponent },
             { path: 'lists', component: ListsComponent }
           ]
         },
         { path: '**', redirectTo: 'home', pathMatch: 'full' }
       ];
