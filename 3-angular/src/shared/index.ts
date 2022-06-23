import { CitrusMoviesContainer } from './components/citrus-movies-container/citrus-movies-container';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { StarsComponent } from './components/stars/stars.component';
import { BooleanPipe } from './pipes/boolean.pipe';

export const components: any[] = [
  CitrusMoviesContainer,
  LoadingSpinnerComponent,
  StarsComponent,
];

export const pipes: any[] = [BooleanPipe];
