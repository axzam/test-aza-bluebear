import { Component } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDigimonComponent } from '../details-digimon/details-digimon.component';

@Component({
  selector: 'app-grid-digimon',
  templateUrl: './grid-digimon.component.html',
  styleUrls: ['./grid-digimon.component.css']
})
export class GridDigimonComponent {


  cards: any[] = [];
  displayedCards: any[] = [];
  currentPage = 1;
  pageSize = 10; // Number of cards to display per page
  totalPages = 0;
  constructor(
    private cardService: CardService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getCards(this.pageSize, this.currentPage).subscribe(data => {
      this.displayedCards = data.content;
      this.totalPages = data.pageable.totalPages;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCards();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCards();
    }
  }

  public  openMe(id: number ): void {
    
    this.cardService.getCardById(id).subscribe(data => { 
      this.dialog.open(DetailsDigimonComponent, {data: { data }})
    })
}




}
