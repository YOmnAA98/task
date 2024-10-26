import { Component, DoCheck } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MeetingTitleComponent } from '../meeting-title/meeting-title.component';
import { MainShowComponent } from "../main-show/main-show.component";
import { TempShowComponent } from '../temp-show/temp-show.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-meeting',
  standalone: true,
  imports: [NavbarComponent, MeetingTitleComponent, MainShowComponent, TempShowComponent, CommonModule],
  templateUrl: './start-meeting.component.html',
  styleUrl: './start-meeting.component.css'
})
export class StartMeetingComponent implements DoCheck{
  ngDoCheck(): void {
    if(this.isAttend === false && this.isTopic === false && this.isAttachment === false && this.isRelated === false){      
      this.isHide = false;
    }else {
      this.isHide = true;
    }
  }

  isGreen: boolean = true;
  isRed: boolean = true;
  isAttend: boolean = true;
  isTopic: boolean = true;
  isAttachment: boolean = true;
  isRelated: boolean = true;
  isHide: boolean = true;
  changeToGreen(): void{
    this.isRed = false;
    this.isGreen = true;
  }
  changeToRed(): void{
    this.isGreen = false;
    this.isRed = true;
  }

  attendance(): void{
    this.isAttend = !this.isAttend;    
  }
  topics(): void{
    this.isTopic = !this.isTopic;    
  }
  attachments(): void{
    this.isAttachment = !this.isAttachment;    
  }
  relatedMeetings(): void{
    this.isRelated = !this.isRelated;    
  }
}
