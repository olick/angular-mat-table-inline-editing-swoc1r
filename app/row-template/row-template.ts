import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'row-template',
  templateUrl: './row-template.html',
})
export class RowTemplateComponents {
  constructor() {}
  @Input() displayedColumns: string[];
}
