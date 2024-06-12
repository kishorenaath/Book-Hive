import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  cred:any={
    usern:"",
    pword:"",
    role: ""
  }
    alladmins:Admin[]=[]
    allcusts:Customer[]=[]
  
  constructor(private httpadmin:AdminService,private httpcust:CustomerService,private router:Router) { }
  
  LoginObj:any={
    customerId:0,
    username:"",
    password:""
  }
   backregis(){
     this.router.navigate(['register']); 
    }
    getCustomers(){
       this.httpcust.getCustomers().subscribe({
      next:(res)=>{this.allcusts=res},
      error:(err)=>console.log(err)
    })
    }
  ngOnInit(): void {
    this.httpadmin.getAdmins().subscribe((res)=>{this.alladmins=res})
   this.getCustomers();
  }

  addvalidation(myform:any){
    let newlogin:any={

      email:myform.value.Email1,
      password:myform.value.Password1,
    }
  //   const loggedadmin = this.alladmins.find(x=>x.username == this.cred.uname && x.password == this.cred.pword)
  //   const loggedcust = this.allcusts.find(x=>x.username == this.cred.uname && x.password == this.cred.pword)
  // if(loggedadmin != undefined){
  //   console.log("login success");
  //   this.router.navigate(['admin/books']);
  // }else  if(loggedcust != undefined){
  //   console.log("login success");
  //   this.router.navigate(['admin/books']);
  // }else{console.log("false")}
    for(var i in this.alladmins){
      console.log(newlogin.email==this.alladmins[i].username)
      if(newlogin.email==this.alladmins[i].username && newlogin.password==this.alladmins[i].password){
        this.router.navigate(['admin/add']);
      }
    }
    for(var i in this.allcusts){
      console.log(newlogin.email==this.allcusts[i].username)
      console.log(newlogin.email)
      console.log(this.allcusts)
      if(newlogin.email==this.allcusts[i].username && newlogin.password==this.allcusts[i].password){
        this.LoginObj.customerId = this.allcusts[i].customerId;
        this.LoginObj.username = this.allcusts[i].username;
        this.LoginObj.password = this.allcusts[i].password;
        localStorage.setItem("currentuser",JSON.stringify(this.LoginObj));
        this.router.navigate(['books']);
      }
    }
  }
  }


 // onLogin(){
   // console.log(this.alladmins[0].username)
  //  console.log(this.cred.uname )
  //   const loggedadmin = this.alladmins.find(x=>x.username == this.cred.uname && x.password == this.cred.pword)
  // if(loggedadmin != undefined){
  //   console.log("login success");
  //   this.router.navigate(['admindash']);
  // }else{console.log("false")}

  //   if(this.cred.role === "Admin"){
  //     for (let i = 0; i < this.alladmins.length; i++) {
  //       if(this.cred.uname === this.alladmins[i].username && this.cred.pword === this.alladmins[i].password){
  //         console.log("login success");
  //       this.router.navigate(['admindash']);
  //         }else{
  //           console.log("login failure");
  //       }
  //     }
  //   }else  if(this.cred.role === "Customer"){
  //     for (let i = 0; i < this.allcusts.length; i++) {
  //       if(this.cred.uname === this.allcusts[i].username && this.cred.pword === this.allcusts[i].password){
  //         console.log("login success");
  //         this.router.navigate(['custdash']);
  //       }else{
  //         console.log("login failure");
  //       }
  //     }
  // }
//}
//}
