import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'

@Component({
    selector: 'app-orbit-counts',
    templateUrl: './orbit-counts.component.html',
    styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

    @Input() satellites: Satellite[];
    
    typeList :string[];
    

    constructor() { }

    ngOnInit() {
    }

    countType():void{
        this.typeList=[];
        for( let i = 0; i < this.satellites.length; i ++) {
           if(this.typeList.includes(this.satellites[i].type) ) {
            this.typeList.push(this.satellites[i].type);
         }
       }
    }

    count(typeName: string) {
       let result = 0;
       for( let i = 0; i < this.satellites.length; i ++) {
         if(this.satellites[i].type==typeName ) {
           result += 1;
         }
       }
       return result;
     }
}
