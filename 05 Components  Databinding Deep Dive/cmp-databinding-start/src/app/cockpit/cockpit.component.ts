import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated: EventEmitter<any> = new EventEmitter<{serverName: string, serverContent: string}>() ;
  @Output() blueprintCreated:  EventEmitter<any> = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onServerAdded(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent});
  }

  onBlueprintAdded(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: this.newServerContent});
  }
}
