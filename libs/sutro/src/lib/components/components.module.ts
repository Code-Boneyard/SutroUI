import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './nav/nav.module';
import { InteractionsModule } from './interactions/interactions.module';
import { ElementsModule } from './elements/elements.module';
import { ChartsModule } from './charts/charts.module';
import { ListsModule } from './lists/lists.module';
import { GridsModule } from './grids/grids.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { TablesModule } from './tables/tables.module';
import { SharedModule } from '../shared/shared.module';
import { FiltersModule } from './filters/filters.module';
import { CardsModule } from './cards/cards.module';
import { ShapesModule } from './shapes/shapes.module';
import { DividerComponent } from './divider/divider.component';
import { FormsModule } from './forms/forms.module';
import { SheetsModule } from './sheets/sheets.module';
import { MapsModule } from './maps/maps.module';
import { GalleriesModule } from './galleries/galleries.module';
import { AdsModule } from './ads/ads.module';



@NgModule({
  declarations: [DividerComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavModule,
    InteractionsModule,
    ElementsModule,
    ChartsModule,
    ListsModule,
    GridsModule,
    DialogsModule,
    TablesModule,
    FiltersModule,
    CardsModule,
    ShapesModule,
    FormsModule,
    SheetsModule,
    MapsModule,
    GalleriesModule,
    AdsModule
  ]
})
export class ComponentsModule { }
