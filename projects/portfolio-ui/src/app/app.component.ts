import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JjsButtonComponent, JjsLoaderComponent } from '@portfolio-component';
import { HttpRequestService, JjsLoaderService } from '@portfolio-data';
import { FooterComponent, HeaderComponent, NavigationComponent } from '@portfolio-ui';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JjsButtonComponent, JjsLoaderComponent, CommonModule, HeaderComponent, FooterComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio-ui';

  destroyRef = inject(DestroyRef);
  constructor(public httpService: HttpRequestService,
    public loaderService: JjsLoaderService
  ) {
  }
  ngOnInit(): void {
    // this.httpService
    // .get()
    // .pipe(
    // takeUntilDestroyed(this.destroyRef))
    // .subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (errors) => {
    //     console.log(errors);
    //   },
    // });

    this.httpService.get401().subscribe();
    this.httpService.get503().subscribe();
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnDestroy(): void {
  }
}
