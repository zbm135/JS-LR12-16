import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import {SrvService} from '../services/json/srv-service.service'
import {Worker} from '../services/model/workermodel';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.css']
})
export class ListWorkerComponent implements OnInit {
  @Output() FilterWorkersList = new EventEmitter<object>();
  workers: Worker[];

  searching = {
   Name: '',
  };

  sorting = false;

  constructor(private srv: SrvService,private router: Router) { }

  onFilterWorkersList() {
    this.FilterWorkersList.emit(this.searching);
  }

  useSortingId(){
    
    if (this.sorting == false){
      this.sorting = true; 
      this.workers.sort((prev,next) =>{
        if (prev.id < next.id) return -1;
        else if (prev.id > next.id) return 1;
        else return 0;
      });   
        
    }
    else if (this.sorting == true){
      this.sorting = false;   
      this.workers.sort((prev,next) =>{
        if (prev.id > next.id) return -1;
        else if (prev.id < next.id) return 1;
        else return 0;
       
      });  
       
    }
  }
    

  useSortingAge(){
    
    if (this.sorting == false){
      this.sorting = true; 
      this.workers.sort((prev,next) =>{
        if (prev.birth < next.birth) return -1;
        else if (prev.birth > next.birth) return 1;
        else return 0;
      });   
        
    }
    else if (this.sorting == true){
      this.sorting = false;   
      this.workers.sort((prev,next) =>{
        if (prev.birth > next.birth) return -1;
        else if (prev.birth < next.birth) return 1;
        else return 0;
       
      });  
       
    }
  }

  ngOnInit(): void {
    
    this.workers = [];
    
    this.srv.getWorkers().then(()=>
    (this.srv.workers).forEach(worker=>this.workers.push(worker)))
  

  }

  declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
  
 birthDateToAge(b) {
    let n = new Date();
      b = new Date(b);
     let age = n.getFullYear() - b.getFullYear();
    return n.setFullYear(1970) < b.setFullYear(1970) ? age - 1 : age;
  }

  async onDelete(id){
    try {
      await this.srv.removeWorker(id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/list']);
    this.workers = [];
    this.srv.getWorkers().then(()=>
    (this.srv.workers).forEach(worker=>this.workers.push(worker)))
  }

}
