import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('userPhoto', { static: false }) userPhoto: ElementRef | undefined;
  private offsetX = 0;
  private offsetY = 0;
  private isDragging = false;

  constructor(private renderer: Renderer2) {}

  onMouseDown(e: MouseEvent) {
    if (this.userPhoto) {
      this.isDragging = true;
      const rect = this.userPhoto.nativeElement.getBoundingClientRect();
      this.offsetX = e.clientX - rect.left;
      this.offsetY = e.clientY - rect.top;
      this.renderer.setStyle(this.userPhoto.nativeElement, 'cursor', 'grabbing');
    }
  }

  onMouseMove(e: MouseEvent) {
    if (this.isDragging && this.userPhoto) {
      this.renderer.setStyle(this.userPhoto.nativeElement, 'left', e.clientX - this.offsetX + 'px');
      this.renderer.setStyle(this.userPhoto.nativeElement, 'top', e.clientY - this.offsetY + 'px');
    }
  }

  onMouseUp() {
    if (this.userPhoto) {
      this.isDragging = false;
      this.renderer.setStyle(this.userPhoto.nativeElement, 'cursor', 'grab');
    }
  }
}
