export class Worker{
    public id:number;
    public surname:string;
    public name:string;
    public middlename: string;
    public phone: string;
    public email: string;
    public birth: string;
    public departament: string;
    public stud:string;

    constructor(surname:string, name:string,middlename: string,
        phone: string,email: string,birth: string,departament: string, id?:number){
            this.id=id;
            this.surname=surname;
            this.name = name;
            this.middlename=middlename;
            this.phone=phone;
            this.email=email;
            this.birth=birth;
            this.departament=departament; 
         }
}

