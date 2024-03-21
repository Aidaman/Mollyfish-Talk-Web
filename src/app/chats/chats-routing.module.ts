import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'direct-messages',
        pathMatch: 'full'
    },
    {
        path: 'direct-messages',
        loadChildren: () => import('./direct-messages/direct-messages.module').then(m => m.DirectMessagesModule)
    },
    {
        path: 'spaces',
        loadChildren: () => import('./spaces/spaces.module').then(m => m.SpacesModule)
    },
    {
        path: '**',
        redirectTo: 'direct-messages'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
