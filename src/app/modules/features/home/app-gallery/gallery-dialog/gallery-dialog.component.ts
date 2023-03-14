import { Component, ElementRef, Inject, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GALLERY_IMAGES } from '../../home-data';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {

  
  constructor(@Inject(MAT_DIALOG_DATA) public id: number,
              public dialogRef: MatDialogRef<GalleryDialogComponent>,) { }

  allGalleryImages = GALLERY_IMAGES;
  selectedGallery:any;
  ngOnInit(): void {
    console.log(this.allGalleryImages,this.id,"DAATA"); 
    let selectedGalleryIndex = this.allGalleryImages.findIndex((item:any)=> item.gallery_code == this.id)
    this.selectedGallery = this.allGalleryImages[selectedGalleryIndex];
    console.log(this.selectedGallery,"SGI");
    
  }

    galleryDialogGridConfig:any= {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      gridBreakpoints:{sm: 650, md: 1200, lg: 1600, xl: 2000},
      load: 3,
      interval: {timing: 20000, initialDelay: 10000},
      loop: true,
      touch: true,
      velocity: 0.2
    }

  


  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  galleryDialogData = {
    showButtons:true,
    buttonsPosition:'bottom'
  }

  ngAfterViewInit(){
    
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    
    setTimeout(()=>{
      this.render_child = true;
    },10)

  }


  onNoClick(): void {
    this.dialogRef.close();
  }


}
