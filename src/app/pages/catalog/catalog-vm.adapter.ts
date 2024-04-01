import {CatalogVM} from "./catalog-vm";

type CatalogVMAdapter = {
  entityToVM(entity: CatalogVM): CatalogVM
}

export const usersVMAdapter: CatalogVMAdapter = {
  entityToVM({ name, type }) {
    return {name, type}
  }
}
