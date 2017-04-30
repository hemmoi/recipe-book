import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toolbarSelection = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.toolbarSelection.emit(feature);
  }

}
