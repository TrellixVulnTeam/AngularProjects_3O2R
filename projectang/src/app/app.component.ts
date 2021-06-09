import { DataService } from './data.service';
import { Component } from '@angular/core';
import {LogService}from './log.service'
     
@Component({
    selector: 'my-app',
    
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
    providers:[DataService, LogService]
})
export class AppComponent { 
    name= "";
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
constructor(private dataService:DataService) {
    
    
}
addItem(name:string)
{
    this.dataService.addData(name);

}
ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items=this.dataService.getData();
}

}