import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeatureContainerComponent } from '@home/home-feature.container';
import { MovieFeatureContainerComponent } from 'src/Movie/movie-feature.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies',
  },
  {
    path: 'movies',
    component: HomeFeatureContainerComponent,
  },
  {
    path: 'movies/:title',
    component: MovieFeatureContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
