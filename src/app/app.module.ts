import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SliderBlockComponent } from './components/slider-block/slider-block.component';
import { LiveFeedComponent } from './components/live-feed/live-feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DefaultBlockComponent } from './components/default-block/default-block.component';
import { ScriptService } from './services/script/script.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { MenuComponent } from './components/menu/menu.component';
import { StaffComponent } from './components/staff/staff.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
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
    DefaultBlockComponent,
    AboutUsComponent,
    ContactComponent,
    CounterComponent,
    FooterComponent,
    GalleryComponent,
    MapComponent,
    MenuComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    MarkdownModule.forRoot(),
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
