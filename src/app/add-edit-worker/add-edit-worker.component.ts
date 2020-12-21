import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SrvService} from '../services/json/srv-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-worker',
  templateUrl: './add-edit-worker.component.html',
  styleUrls: ['./add-edit-worker.component.css']
})
export class AddEditWorkerComponent implements OnInit {
  
  id:number;

  constructor(private srv: SrvService, private activatedRouter: ActivatedRoute,private router: Router) {
    this.activatedRouter.params.subscribe(param => {
      this.id = parseInt(param.id,10);
    })
   }


   studForm: FormGroup;
   disabledControl: boolean;

  ngOnInit(): void {

    this.studForm = new FormGroup({
      surname: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      name: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      middlename: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      phone: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      email: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      birth: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      departament: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
    });

    if (this.id){
      this.srv.getWorkers().then(()=>{
        (this.srv.workers).forEach(worker=>{
          if (worker.id === this.id){

            const item = worker;
            delete item.id;
            this.studForm.setValue(item);
          }
          })
      })
    }

  }

  isNaN(id:number){
    return isNaN(id);
  }


  async onDelete(id){
    try {
      await this.srv.removeWorker(id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/list']);
  }


  onEdit(id){
    let worker = this.studForm.value;
    worker.id = id;
    this.srv.editWorker(worker).then(() =>
    this.router.navigate(['/list']));
  }

  onAdd(){
    const studnew = this.studForm.value;
    this.srv.addWorker(studnew).then(()=>{
      this.studForm.reset();
      this.router.navigate(["list"])
    })}

}
