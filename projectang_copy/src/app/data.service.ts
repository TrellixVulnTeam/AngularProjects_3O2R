import {Injectable} from '@angular/core';
import {LogService}from './log.service'

@Injectable()
export class DataService{
  
        private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];
          

    /**
     *
     */
    constructor(private log:LogService) {
                
    }
        getData(): string[] {
             this.log.write("Get data");
            return this.data;
        }
        addData(name: string){
              this.log.write("Add data");
            this.data.push(name);
        }
    }