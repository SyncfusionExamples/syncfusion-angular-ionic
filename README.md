# ej2-angular-ionic
Integrating EJ2 Angular components into  ionic framework.

# Getting Started Ionic with Angular

This document helps you to create a simple Angular application with `Ionic Framework` and `Syncfusion Angular UI components`.

## Prerequisites

Before getting started with Syncfusion Angular Components in Ionic with Angular project, check whether the following are installed in the developer machine. 

* Angular Versions supported - 4+
* Typescript Versions supported - 2.6+
* ionic CLI 3.9.0+

>Note: If the `ionic CLI` is not installed, refer to [`Getting Started with ionic`](https://ionicframework.com/getting-started/#cli) to install it.

## Create an application

Create a new project with the following command using the command prompt.

```bash
npm install -g ionic
```

>Note: Here we are using ionic version 4.6.0 to support angular 6 .

Then, run the following command line to create a new Ionic template application. The new application will be placed under ej2-ionic folder after the command complete its process, and it will install the default npm dependent packages when creating the application.

```bash
ionic start ej2-ionic
```

>Note: Also refer the below [getting started](https://ionicframework.com/getting-started/#cli ) to install ionic framework.

## Installing Syncfusion button package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the angular syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Add `@syncfusion/ej2-angular-buttons` package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons --save
(or)
npm i @syncfusion/ej2-angular-buttons --save
```

## Adding button module

After installing the package, the component modules are available to configure into your application from Syncfusion installed
package. Syncfusion Angular package provides two different types of ng-Modules.

Refer to [`Ng Module`](https://ej2.syncfusion.com/angular/documentation/common/ng-module.html) to learn about `ngModules`.

Refer to the following code snippet to import the button module in app.module.ts from the `@syncfusion/ej2-angular-buttons`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ButtonModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

## Adding Syncfusion component

Add the button component snippet in `app.component.ts` as follows.

```typescript
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  template: `
    <h1>
      Hello Angular, Syncfusion Angular UI Button!
    </h1>
    <button ejs-button cssClass="”e-primary”">Button</button>
  `
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

```

## Adding CSS reference

Add button component styles as given in the `angular-cli.json` file within the app -> styles section.

>Note: If you are using Angular 6 project, add the changes in `angular.json` file.

```typescript

{
"apps": [
    {
         "styles": [
              {
                "input": "./node_modules/@syncfusion/ej2-angular-buttons/styles/material.css"
              },
              {
                "input": "src/global.scss"
              }
            ]
     }
   ]
}

```

## Running the application

 Finally, run the following command line to start the application. The Syncfusion Essential JS 2 button component will be rendered in the ionic framework. 

 ```bash
ionic serve 
```

>Note: For your convenience we have prepared a angular sample with ionic framework that can be downloaded from the following link,
http://www.syncfusion.com/downloads/support/directtrac/general/ze/angular-6-ionic-1643684709.zip  
