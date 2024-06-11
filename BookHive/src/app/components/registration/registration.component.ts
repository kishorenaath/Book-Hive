import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  allcusts:Customer[]=[]
  constructor(private router:Router,private httpcust:CustomerService) { }

  backlogin(){
    this.router.navigate(['login']); 
   }
   addvalidation(myform:any){
    let newlogin:any={
      customerId: 0,
      username: myform.value.Email1,
      password: myform.value.Password1,
      role: "Customer"
    }
   this.httpcust.addCustomer(newlogin).subscribe({
    next:(response)=>{this.router.navigate(['books'])},
        error:(err)=>{console.log(err)}
   })
  console.log(this.allcusts)
  }
  ngOnInit(): void {
     this.httpcust.getCustomers().subscribe({
      next:(res: Customer[])=>{this.allcusts=res},
      error:(err: any)=>console.log(err)
    })
  }

}
