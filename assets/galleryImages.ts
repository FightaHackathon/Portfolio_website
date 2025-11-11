// assets/galleryImages.ts
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Template for local images.
// Place your image files (1.jpg, 2.jpg, etc.) in an `/images/` folder
// at the root of your project.
export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'assets/Images/1.jpg', alt: 'Gallery Image 1' },
  { id: 2, src: 'assets/Images/2.jpg', alt: 'Gallery Image 2' },
  { id: 3, src: 'assets/Images/3.jpg', alt: 'Gallery Image 3' },
  { id: 4, src: 'assets/Images/4.jpg', alt: 'Gallery Image 4' },
  { id: 5, src: 'assets/Images/5.jpg', alt: 'Gallery Image 5' },
  { id: 6, src: 'assets/Images/6.jpg', alt: 'Gallery Image 6' },
  { id: 7, src: 'assets/Images/7.jpg', alt: 'Gallery Image 7' },
  { id: 8, src: 'assets/Images/8.jpg', alt: 'Gallery Image 8' },
  { id: 9, src: 'assets/Images/9.jpg', alt: 'Gallery Image 9' },
  { id: 10, src: 'assets/Images/10.jpg', alt: 'Gallery Image 10' },
  { id: 11, src: 'assets/Images/11.jpg', alt: 'Gallery Image 11' },
  { id: 12, src: 'assets/Images/12.jpg', alt: 'Gallery Image 12' },
  { id: 13, src: 'assets/Images/13.jpg', alt: 'Gallery Image 13' },
];