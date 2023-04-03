import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  
  @Input() cards!:any[];
  @Input() dynamicLabel!:string;
  @Output() feedbackEvent:EventEmitter<any> = new EventEmitter();
  @Output() viewDetailsEvent:EventEmitter<any> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  feedBack() {
    this.feedbackEvent.emit();
  }
  viewDetails() {
    this.viewDetailsEvent.emit();
  }
}
