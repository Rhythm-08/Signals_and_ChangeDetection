import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-ref',
  templateUrl: './change-detection-ref.component.html',
  styleUrls: ['./change-detection-ref.component.scss']
})
export class ChangeDetectionRefComponent {
name= 'Change Detection Ref'
topicName = 'change Detection in Angular'
isVisible =true;
creationDate = new Date();

constructor(private cdr:ChangeDetectorRef){
  setTimeout(()=>{
    this.topicName='ZoneJs in Angular'
    console.log('Topic name changed to :', this.topicName);
    this.cdr.detectChanges();
  })
}

getInfo(){
  return "1M views| 31K subs"
}
}
