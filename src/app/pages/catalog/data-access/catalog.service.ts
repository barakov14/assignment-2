import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of, switchMap} from "rxjs";
import {Catalog} from "../../../core/api-types/catalog";
import {ApiService} from "../../../core/http/api.service";

@Injectable({providedIn: 'root'})

export class CatalogService {

  public readonly catalog$ = new BehaviorSubject<Catalog | null | undefined>(null)
  public readonly errors$ = new BehaviorSubject<Catalog | null | undefined>(null)
  // Injecting ApiService class to use its methods
  private readonly apiService = inject(ApiService)


  // Fetching data from catalog using HttpClient
  public getCatalog(): Observable<void> {
    return this.apiService.get<Catalog>('/catalog').pipe(
      map((catalog) => {
        this.catalog$.next(catalog)
      }),
      catchError(() => {
        return of(console.log('some error occured'))
      })
    )
  }
}
