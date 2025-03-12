export default class CustomError extends Error {
    statuscode:number
    errorstage:string
    constructor(message:string, statuscode:number,errorstage:string) {
      super(message); 
      this.statuscode = statuscode; 
     this.errorstage=errorstage;
    }
  }