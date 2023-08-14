import {Component, Inject, Injectable} from  '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-details-digimon',
  templateUrl: './details-digimon.component.html',
  styleUrls: ['./details-digimon.component.css']
})
export class DetailsDigimonComponent {

  digimon: any;
  
  constructor(private  dialogRef:  MatDialogRef<DetailsDigimonComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) 
  {
    console.log (data.data.types.length);
      
    var digimonView = {
    id: data.data.id,
    name: data.data.name,
    image: !(data.data.images[0].href) ? "" : data.data.images[0].href,
    level: !(data.data.levels.length >= 1) ? "" : data.data.levels[0].level,
    attribute: !(data.data.attributes.length >= 1) ? "" : data.data.attributes[0].attribute,
    type: !(data.data.types.length >= 1) ? "" : data.data.types[0].type,
    field: !(data.data.fields.length >= 1) ? "" : data.data.fields[0].field,
    fieldImage: !(data.data.fields.length >= 1) ? "" : data.data.fields[0].image 
  }

  this.digimon = digimonView;
  console.log (digimonView);
    
  }
  

  public  closeMe() {
      this.dialogRef.close();
  }
}
