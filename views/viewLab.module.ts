import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LeftRightSplitterComponent } from './leftRightSplitter/leftRightSplitter.component';
import { UpDownSplitterComponent } from './upDownSplitter/upDownSplitter.component';
import { SplitterTesterComponent } from './splitterTester/splitterTester.component';
import { UpDownSplitterTesterComponent } from './upDownSplitterTester/upDownSplitterTester.component';

@NgModule({
  declarations: [
    LeftRightSplitterComponent
    , SplitterTesterComponent
    , UpDownSplitterComponent
    , UpDownSplitterTesterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export default class ViewLabModule {}