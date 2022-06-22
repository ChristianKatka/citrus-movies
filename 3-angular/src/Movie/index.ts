import { MovieFeatureContainerComponent } from './movie-feature.container';
import { ActorsComponent } from './movie/actors/actors.component';
import { MoviePosterComponent } from './movie/movie-poster/movie-poster.component';
import { MovieComponent } from './movie/movie.component';
import { NyTimesInfoComponent } from './movie/ny-times-info/ny-times-info.component';
import { OmdbInfoComponent } from './movie/omdb-info/omdb-info.component';

export const components: any[] = [
  MovieFeatureContainerComponent,
  MovieComponent,
  NyTimesInfoComponent,
  OmdbInfoComponent,
  MoviePosterComponent,
  ActorsComponent
];
