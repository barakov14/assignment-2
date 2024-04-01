import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Catalog} from "../../../core/api-types/catalog";
import {CatalogCardComponent} from "../catalog-card/catalog-card.component";

@Component({
  selector: 'app-catalog-list',
  standalone: true,
  imports: [
    CatalogCardComponent
  ],
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent {
  @Input({required: true}) catalog!: Catalog
}
