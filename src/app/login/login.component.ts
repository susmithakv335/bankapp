import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="your perfect banking partner"
accno ="Account Number please"
acno=""
pswd=""
users:any={
  1000:{acno:1000,uname:"neer",password:"1000",balance:5000},
  1001:{acno:1001,uname:"arya",password:"1001",balance:5000},
  1002:{acno:1002,uname:"ammu",password:"1002",balance:5000},
}
loginForm =this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // acnoChange(event:any){
  // this.acno=event.target.value;
  //  console.log( this.acno);
   
  // }
  //   pswdChange(event:any){
  //   this.pswd=event.target.value;
  //  console.log(this.pswd);
   
  // }
  login(){
    var acno=this.loginForm.value.acno
    var password=this.loginForm.value.pswd
    if(this.loginForm.valid){
let result=this.ds.login(acno,password)  
if(result){
  alert("login successful")
  this.router.navigateByUrl('dashboard')

}
  }
}
}

// login(){
//   var acno=this.acno
//   var password=this.pswd
//   let database=this.ds.users
//   if(acno in database){
// if(password == database[acno]["password"]){
// alert("login successful")
// this.router.navigateByUrl('dashboard')
//   }
//   else{
//     alert("incorrect password")
//   }
// }
//   else{
//     alert("invalid account number")
//   }
  
//   }
// }

// login(a:any,p:any){
//   console.log(a);
  
//   var acno=a.value
//   var password=p.value
//   let database=this.users
//   if(acno in database){
// if(password == database[acno]["password"]){
// alert("login successful")
//   }
//   else{
//     alert("incorrect password")
//   }
// }
//   else{
//     alert("invalid account number")
//   }
  
//   }
// }
