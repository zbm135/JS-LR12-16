import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoremComponent } from '../app/lorem/lorem.component';
import {AddEditWorkerComponent} from '../app/add-edit-worker/add-edit-worker.component'
import {ListWorkerComponent} from '../app/list-worker/list-worker.component';


const routes: Routes = [
  {path: "", component: LoremComponent},
  {path: "list",component: ListWorkerComponent},
  {path: "add",component: AddEditWorkerComponent},
  {path: "edit/:id",component: AddEditWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
