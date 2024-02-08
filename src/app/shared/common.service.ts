import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  url:string="http://localhost:3000/Employee";
  
  constructor(private httpclient:HttpClient) { }
  e:Employee={

    id:0,
    name:"",
    addr:"",
    mobno:null
  }


  getdata(){
    return this.httpclient.get(this.url);
  }

// getdata():Observable<Employee[]>{

//   return this.httpclient.get<Employee[]>(this.url)
// }


postdata(emp:Employee){
  return this.httpclient.post(this.url,emp);
}

updatedata(emp:Employee){
  return this.httpclient.put(this.url+"/"+emp.id,emp);
}
deletedata(emp:Employee){
  return this.httpclient.delete(this.url+"/"+emp.id);
}

}