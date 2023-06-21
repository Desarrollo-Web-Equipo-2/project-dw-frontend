import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { PostComponent } from './pages/post/post.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    ChatComponent,
    MessagesComponent,
    PostComponent,
    BottomNavbarComponent,
    TopNavbarComponent,
    LoadingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
