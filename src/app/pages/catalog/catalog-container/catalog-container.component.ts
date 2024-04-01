import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {CatalogService} from "../data-access/catalog.service";
import {CatalogListComponent} from "../catalog-list/catalog-list.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-catalog-container',
  standalone: true,
  imports: [
    CatalogListComponent,
    AsyncPipe
  ],
  templateUrl: './catalog-container.component.html',
  styleUrl: './catalog-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogContainerComponent implements OnInit {
  private readonly catalogService = inject(CatalogService)
  public readonly catalog$ = this.catalogService.catalog$.asObservable()

  // Component initialization
  ngOnInit() {
    this.catalogService.getCatalog() // get the catalog on initialization
  }
}
