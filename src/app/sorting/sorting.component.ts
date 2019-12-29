

import {Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  type: string;
  fee: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', type: 'Machine Learning',fee: 1.0079, symbol: 'H'},
  {name: 'Helium',type: 'Web', fee: 4.0026, symbol: 'He'},
  {name: 'Lithium', type: 'Machine Learning',fee: 6.941, symbol: 'Li'},
  {name: 'Beryllium', type: 'Android',fee: 9.0122, symbol: 'Be'},
  {name: 'Boron', type: 'Web',fee: 10.811, symbol: 'B'},
  {name: 'Carbon', type: 'Machine Learning',fee: 12.0107, symbol: 'C'},
  {name: 'Nitrogen',type: 'Android', fee: 14.0067, symbol: 'N'},
  {name: 'Oxygen', type: 'Machine Learning',fee: 15.9994, symbol: 'O'},
  {name: 'Fluorine', type: 'Android',fee: 18.9984, symbol: 'F'},
  {name: 'Neon', type: 'Web',fee: 20.1797, symbol: 'Ne'},
];

/*function filterSelection(c) {
  //console.log("filterSelection");
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected4
  console.log(x.length)
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
  //console.log("w3AddClass");
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
  //console.log("w3RemoveClass");
}

function doit(){
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  //console.log(btns.length);
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var li = document.getElementsByClassName(this.className)[0].id;
      filterSelection(li);
    });

  }
}*/

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})

export class SortingComponent {

  displayedColumns: string[] = ['name', 'fee', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //filterSelection("Web")
    //doit()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
