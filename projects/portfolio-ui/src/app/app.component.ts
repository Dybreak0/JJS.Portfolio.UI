import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JjsButtonComponent, JjsLoaderComponent } from '@portfolio-component';
import { HttpRequestService, JjsLoaderService } from '@portfolio-data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JjsButtonComponent, JjsLoaderComponent, CommonModule],
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
    this.httpService
    .get()
    .pipe(
    takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (errors) => {
        console.log(errors);
      },
    });
  }

  ngOnDestroy(): void {
  }
}
