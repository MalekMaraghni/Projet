import { Component, OnInit } from '@angular/core';
import { ProjetDCrudService} from '../services/projetD-crud.service'
import { ProjetCrudService } from '../services/projet-crud.service';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-archive-projet',
  templateUrl: './archive-projet.component.html',
  styleUrls: ['./archive-projet.component.css']
})
export class ArchiveProjetComponent implements OnInit {
projetD =null;
  constructor( private projetCrudService: ProjetCrudService ) { 
    this.getprojetD();
  }

  getprojetD(){
    this.projetCrudService.getProjetsDone().subscribe(
      (resp) =>{
        console.log(resp);
        this.projetD = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
    
  }
  fileName= 'ExcelSheet.xlsx';  
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

  ngOnInit(): void {
  }

}
