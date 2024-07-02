import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NewsComponent } from './pages/news/news.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesRoutingModule } from './features.routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CharactersComponent,
    NewsComponent,
  ],
  imports: [CommonModule, RouterModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
