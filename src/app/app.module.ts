import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {NgOptimizedImage} from "@angular/common";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {initialState, taskReducer} from "./shared/store/task-reducer";
import {localStorageSync} from "ngrx-store-localstorage";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from "../environment/environment";


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['entities'],rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgOptimizedImage,
    CoreModule,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature('entities', taskReducer,
      {
        metaReducers: metaReducers,
        initialState: initialState
      }),
    environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
