# Integrating Syncfusion Angular Components with Angular and Ionic Applications

This project shows the minimal steps required to create an Ionic Angular application and integrate Syncfusion Angular UI components, particularly the @syncfusion/ej2-angular-grids package. It provides clear guidance on setting up prerequisites, installing required packages, importing Angular modules, applying component styles, and rendering a simple data‑bound Grid within an Ionic page.

## Features

- Ionic + Angular starter setup
- Add `@syncfusion/ej2-angular-grids` and import `GridAllModule`
- Example data-bound Grid with sample data

## Prerequisites

- See Syncfusion system requirements: https://ej2.syncfusion.com/angular/documentation/system-requirement
- `ionic` CLI `^6.x.x` or later

## Quick Install

First, make sure the Ionic CLI is installed globally:

```bash
npm install -g ionic
```

If the Ionic application is not already created, create a new Ionic Angular application using the following commands:

```bash
ionic start ej2-ionic blank --type=angular
cd ej2-ionic
```
Once the Ionic project is ready, install the Syncfusion Angular Grid package:

```bash
npm i @syncfusion/ej2-angular-grids --save
```

## Running the Application

Finally, run the following command line to start the application. The Syncfusion Angular Grid component will be rendered in the ionic framework. 

 ```bash
ionic serve 
```
