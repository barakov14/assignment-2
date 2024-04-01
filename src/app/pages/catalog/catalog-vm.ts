import {DeepReadonly} from "../../core/utils/deep-readonly";
import {Catalog} from "../../core/api-types/catalog";

export type CatalogVM = DeepReadonly<
  Pick<Catalog, "name" | "type">
>
