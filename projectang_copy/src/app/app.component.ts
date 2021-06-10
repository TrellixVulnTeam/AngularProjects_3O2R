import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import {LogService}from './log.service'
import {User}from '../assets/user';
import { HttpClient } from '@angular/common/http';
import {HttpService}from './http.service';

     
@Component({
    selector: 'my-app',
    
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
    providers:[DataService, LogService, HttpService]
})
export class AppComponent implements OnInit { 
    user: User | undefined;
 
    name= "";
    exportValue:string="SomeText";
    tempName:string="Input name";
    items:string[]=[];
    
    colspan:'Text';
    isRed = true;
    testVar=199;
count:number=0;
increase($event:any):void{

    this.count++;
    console.log($event);
}

/**
 *
 */
constructor(private dataService:DataService, private http:HttpClient) {
    
    
}
addItem(name:string)
{
    this.dataService.addData(name);

}
ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items=this.dataService.getData();

  var tmp=  this.http.get('assets/user.json').subscribe((data:any)=>this.user=new User(data.name, data.age));
    console.log(tmp[0].age);
    // var ntm=this.http.get('asset/user.json').subscribe((data:any)=>this.user=new User(data.name, data.age));
    // console.log(ntm);

}
condition: boolean=true;
      
toggle(){
    this.condition=!this.condition;
}

}