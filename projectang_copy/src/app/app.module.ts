import { LogService } from './log.service';
import { ChildComponent } from './chilld.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {DataComponent} from './data.component';
import { DataService } from './data.service';
import {DataModule }from './data/ndata.module';
import {BoldDirective}from './bold.directive';
import {WhileDirective} from './while.directive';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports:      [ BrowserModule, FormsModule, DataModule, HttpClientModule ],

    declarations: [ AppComponent, ChildComponent, DataComponent, BoldDirective, WhileDirective ],
    providers:   [DataService, LogService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }