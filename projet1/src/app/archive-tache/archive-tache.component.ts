import { Component, OnInit } from '@angular/core';
import { TacheDCrudService } from '../services/tacheD-crud.service';
import { TachesCrudService } from '../services/taches-crud.service';

import * as xlsx from 'xlsx';
@Component({
  selector: 'app-archive-tache',
  templateUrl: './archive-tache.component.html',
  styleUrls: ['./archive-tache.component.css']
})
export class ArchiveTacheComponent implements OnInit {
  tacheD = null;
  fileName= 'ExcelSheet.xlsx';  

  constructor(    private tachesCrudService :TachesCrudService,
    ) { 
      this.gettacheD();
    }
    exportexcel():void{
      //get table with id 
      let element =document.getElementById('excel-table');
      const ws:xlsx.WorkSheet=xlsx.utils.table_to_sheet(element);
      // generate workbook and add the worksheet
      const wb:xlsx.WorkBook=xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb,ws,'sheet1');
      //save file
      xlsx.writeFile(wb,this.fileName);
    }

    gettacheD(){
      this.tachesCrudService.getTachesDone().subscribe(
        (resp) =>{
          console.log(resp);
          this.tacheD = resp;
        },
        (err) =>{
          console.log(err);
        }
      );
      
    }
  ngOnInit(): void {
  }

}
