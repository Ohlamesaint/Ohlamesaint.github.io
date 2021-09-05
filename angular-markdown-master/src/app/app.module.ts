import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MdShowComponent } from './Components/md-show/md-show.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
@NgModule({
  declarations: [AppComponent, MdShowComponent, AboutMeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// export function markedOptionsFactory(
//   anchorService: AnchorService
// ): MarkedOptions {
//   const renderer = new MarkedRenderer();

//   // fix `href` for absolute link with fragments so that _copy-paste_ urls are correct
//   renderer.link = (href: string, title: string, text: string) => {
//     return MarkedRenderer.prototype.link.call(
//       renderer,
//       anchorService.normalizeExternalUrl(href),
//       title,
//       text
//     ) as string;
//   };

//   return { renderer };
// }

// @NgModule({
//   imports: [
//     AnchorModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     MarkdownModule.forRoot({
//       loader: HttpClient,
//       markedOptions: {
//         provide: MarkedOptions,
//         useFactory: markedOptionsFactory,
//         deps: [AnchorService],
//       },
//       sanitize: SecurityContext.NONE,
//     }),
//     MatButtonModule,
//     MatIconModule,
//     MatTabsModule,
//     MatToolbarModule,
//     SharedModule,
//   ],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
