# Integrating Syncfusion Angular Components with Angular and Ionic Applications

Repository Description: This repository demonstrates how to add Syncfusion Angular UI components to an Ionic (Angular) application, using the Grid component as an example.

## Project Overview

This project shows the minimal steps to create an Ionic Angular app and integrate Syncfusion Angular components (notably `@syncfusion/ej2-angular-grids`). It includes guidance for prerequisites, package installation, module import, styling, and running a simple data-bound Grid.

## Features

- Ionic + Angular starter setup
- Add `@syncfusion/ej2-angular-grids` and import `GridAllModule`
- Example data-bound Grid with sample data

## Prerequisites

- See Syncfusion system requirements: https://ej2.syncfusion.com/angular/documentation/system-requirement
- `ionic` CLI `^6.x.x` or later

## Quick Install

```bash
npm install -g ionic
ionic start ej2-ionic blank --type=angular
cd ej2-ionic
npm i @syncfusion/ej2-angular-grids --save
```

Import `GridAllModule` into the page module and use `<ejs-grid>` with a `dataSource` as shown in the examples below. Add Syncfusion component styles to `src/global.scss` by importing the package styles and the grid stylesheet.

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

After importing the package, you can start using the Syncfusion UI components. In this example, we're adding a Grid component to the `src/home/home.page.ts` file.

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

Finally, run the following command line to start the application. The Syncfusion Angular Grid component will be rendered in the ionic framework. 

 ```bash
ionic serve 
```

## Run

```bash
ionic serve
```
