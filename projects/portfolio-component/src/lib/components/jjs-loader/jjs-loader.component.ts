import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JjsLoaderService } from '@portfolio-data';

@Component({
  selector: 'jjs-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jjs-loader.component.html',
  styleUrl: './jjs-loader.component.scss'
})
export class JjsLoaderComponent {

  constructor(public loaderService: JjsLoaderService){ }
}
