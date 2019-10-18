import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SliderBlockComponent } from './components/slider-block/slider-block.component';
import { LiveFeedComponent } from './components/live-feed/live-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DefaultBlockComponent } from './components/default-block/default-block.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'livefeed', component: LiveFeedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationBarComponent,
    SliderBlockComponent,
    LiveFeedComponent,
    PageNotFoundComponent,
    DefaultBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
