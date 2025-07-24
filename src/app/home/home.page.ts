import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, GridModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Syncfusion Angular 19 Grid with Ionic</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ejs-grid [dataSource]="data">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width=90></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width=120></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width=90></e-column>
          <e-column field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" width=120></e-column>
        </e-columns>
      </ejs-grid>
    </ion-content>
  `
})
export class HomePage {
  public data: Object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier',
      ShipCity: 'Reims',
      ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ',
      ShipPostalCode: '51100',
      ShipCountry: 'France',
      Freight: 32.38,
      Verified: true
    },
    {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      EmployeeID: 6,
      OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten',
      ShipCity: 'Münster',
      ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ',
      ShipPostalCode: '44087',
      ShipCountry: 'Germany',
      Freight: 11.61,
      Verified: false
    },
    {
      OrderID: 10250,
      CustomerID: 'HANAR',
      EmployeeID: 4,
      OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes',
      ShipCity: 'Rio de Janeiro',
      ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ',
      ShipPostalCode: '05454-876',
      ShipCountry: 'Brazil',
      Freight: 65.83,
      Verified: true
    }
  ];
}