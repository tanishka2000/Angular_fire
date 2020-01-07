

import { Component, OnInit, ViewChild } from '@angular/core'; 
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import { SortService } from 'src/app/shared/sort.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sort } from 'src/app/shared/sort.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})

export class SortingComponent implements OnInit{

  list: Sort[];
  constructor(private service: SortService,
    private firestore: AngularFirestore, config: NgbRatingConfig) { config.max = 5;
      config.readonly = true;}
    
  ngOnInit() {
    this.myData();
  }

  arr : Sort[] = [];

    listData: MatTableDataSource<Sort>;
    displayedColumns : string[] = ['name','location','salary'];
   
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 

  myData(){


    this.service.getData().subscribe(actionArray => {
      console.log("actionArray:: ", actionArray)
      this.list = actionArray.map(item => {
        return {
          description: item.payload.doc.id, ...item.payload.doc.data()
        } as Sort;
      })

      //this.listData = new MatTableDataSource();
      this.listData = new MatTableDataSource(this.list);
      console.log("this.list:: ", this.list)
      console.log("this.listData:: ", this.listData)
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })


}

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

}