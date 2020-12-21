import { Injectable } from '@angular/core';
import { Worker } from '../model/workermodel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SrvService {
  workers: Worker[] = [];
  workersadd: Worker[] = [];
  workersedit: Worker[] = [];
  link = 'http://localhost:3000/workers/';
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(public http: HttpClient) {
  }

  async getWorkers() {
    this.workers = [];

    const data = await this.http
      .get(this.link)
      .toPromise();

    for (const index in data) {
      this.workers.push(data[index]);
    }
  }

  async addWorker(worker: Worker) {
    this.workersadd = [];
    const dataadd = await this.http
      .get(this.link)
      .toPromise();

    for (const index in dataadd) {
      this.workersadd.push(dataadd[index]);
    }
    return this.http.post(this.link, worker, this.options).toPromise();
  }

  async removeWorker(id: number) {
    let linkdel = this.link + id;
    return this.http.request('delete', linkdel, { body: { id } }).toPromise();
  }

  async editWorker(worker: Worker) {
    this.workersedit = [];
    const dataedit = await this.http
      .get(this.link)
      .toPromise();

    for (const index in dataedit) {
      this.workersedit.push(dataedit[index]);
    }

    let link = this.link + worker.id;
    return this.http.put(link, worker, this.options).toPromise();
  }
}
