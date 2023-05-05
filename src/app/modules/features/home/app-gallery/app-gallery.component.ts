import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GALLERY_DATA } from '../home-data';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-app-gallery',
  templateUrl: './app-gallery.component.html',
  styleUrls: ['./app-gallery.component.scss']
})
export class AppGalleryComponent implements OnInit {

  serviceSubscription!: Subscription;


  constructor(
    private _dialog:MatDialog 
  ) { }

  ngOnInit(): void {
  }

  app_gallery_gridConfig:any={
    grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
    gridBreakpoints:{sm: 650, md: 1200, lg: 1600, xl: 2000},
    load: 3,
    interval: {timing: 3000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }


  buttondata = {
    button:true,
    dot:true
  }

  gallery_array = GALLERY_DATA;


  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  galleryData = {
    showButtons:true,
  }

  ngAfterViewInit(){
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })    
    setTimeout(()=>{
      this.render_child = true;
    },10)
  }

  openGallery(id:number){
    let dialogConfig:MatDialogConfig = {
      // maxHeight:"36rem",
      maxWidth:"40rem",
      data:id
    }

    const dialogRef = this._dialog.open(GalleryDialogComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }


  ngOnDestroy(){

    if(this.serviceSubscription){
      this.serviceSubscription.unsubscribe();
    }
}
}
