import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Catalog, Item} from "../../../core/api-types/catalog";

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogCardComponent {
  @Input({required: true}) item!: Item
}
