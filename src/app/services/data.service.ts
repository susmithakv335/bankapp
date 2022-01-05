import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUserName:any

  users:any={
    1000:{acno:1000,uname:"neer",password:"1000",balance:5000},
    1001:{acno:1001,uname:"arya",password:"1001",balance:5000},
    1002:{acno:1002,uname:"ammu",password:"1002",balance:5000},
  }
  
  constructor() { }
  saveDetails(){ //to store in localstorage
    if(this.users){
      localStorage.setItem("db",JSON.stringify(this.users))
    }
    if(this.currentUserName){
      localStorage.setItem("cUserName",JSON.stringify(this.currentUserName))
    }
  }

  register(acno:any,password:any,uname:any){
    let db=this.users
    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      console.log(db);
      this.saveDetails()
      return true
    }
  }
  login(acno:any,password:any){
    let database=this.users
   if(acno in database){

 if(password == database[acno]["password"]){
   this.currentUserName=database[acno]["uname"]
   this.saveDetails()

   return true
   }
   else{
     alert("incorrect password")
     return false
   }
 }
   else{
     alert("invalid account number")
     return false
   }
 }
 deposit(acno:any,password:any,amt:any){
   let db=this.users
   var amount=parseInt(amt)
   if(acno in db){

if(password== db[acno]["password"]){
db[acno]["balance"] = db[acno]["balance"] + amount
this.saveDetails()

return db[acno]["balance"]
}
else{
  alert("incorrect password")
  return false
}
   }
   else{
     alert("account does not exist")
     return false
   }
 }


 withdraw(acno:any,password:any,amt:any){
  let db=this.users
  var amount=parseInt(amt)
  if(acno in db){

if(password == db[acno]["password"]){

  if(db[acno]["balance"]>amount){
    db[acno]["balance"] = db[acno]["balance"] - amount
    this.saveDetails()

    return db[acno]["balance"]
    
  }
  else{
    alert("insufficient balance")
    return false
  }
}
else{
 alert("incorrect password")
 return false
}
  }
  else{
    alert("account does not exist")
    return false
  }
}

   }
 




  


