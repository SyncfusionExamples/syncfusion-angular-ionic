# Integrating Syncfusion Angular Components with Angular and Ionic Applications

This document helps you to create a simple Angular application with the `Ionic Framework` and including `Syncfusion Angular UI components` can be a great way to add functionality and a polished look to your app.

## Prerequisites

* [System requirements for Syncfusion Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* ionic CLI - `^6.x.x` or later

N> If the `ionic CLI` is not installed, refer to the [`Getting Started with ionic`](https://ionicframework.com/getting-started/#cli) document to install it.

## Create an Application

Create a new project with the following command using the command prompt.

```bash
npm install -g ionic
```

Once your development environment is set up, you can start by creating a new project using the Ionic CLI. To do this, run the following command in your command prompt,

```bash
ionic start ej2-ionic blank --type=angular 
```
This command will create a new Ionic template application in a folder called "ej2-ionic" and will also install the default npm packages needed for the application.

N> Refer to this [getting started](https://ionicframework.com/getting-started/#cli) document to install ionic framework.

## Installing Syncfusion Grid package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular syncfusion package from [npm]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Add the `@syncfusion/ej2-angular-grids` package to the application.

```bash
npm i @syncfusion/ej2-angular-grids --save
```

## Adding Grid Module

After installing the package, the component modules are available to configure your application from Syncfusion installed package.

Refer to the following code snippet to import the Grid module in `app/src/home/home.module.ts` from the `@syncfusion/ej2-angular-grids`.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GridAllModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

## Adding Syncfusion component

After importing the package, you can start using the Syncfusion UI components. In this example, we're adding a button component to the `src/home/home.page.ts` file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<ejs-grid [dataSource]='data'>
  <e-columns>
    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
  </e-columns>
</ejs-grid>`
})
export class HomePage {

  constructor() {}
  public data: Object[] = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    }
  ];
}
```

## Adding CSS Reference

Use the styles for the Grid component, you can import the required dependencies as shown in the following snippet in the `~src/global.scss`,

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
```

## Running the Application

Finally, run the following command line to start the application. The Syncfusion Angular button component will be rendered in the ionic framework. 

 ```bash
ionic serve 
```