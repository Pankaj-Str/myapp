import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products = [
    {
      name: 'Smartphone',
      title: 'Latest Model Smartphone',
      description: 'A high-performance smartphone with a stunning display and advanced features.',
      price: 699.99,
      gst: 0.18
    },
    {
      name: 'Laptop',
      title: 'Ultra-Lightweight Laptop',
      description: 'A sleek and powerful laptop designed for professionals on the go.',
      price: 1299.99,
      gst: 0.18
    },
    {
      name: 'Wireless Headphones',
      title: 'Noise-Cancelling Wireless Headphones',
      description: 'Enjoy immersive sound with these top-of-the-line noise-cancelling headphones.',
      price: 249.99,
      gst: 0.18
    },
    {
      name: 'Smartwatch',
      title: 'Fitness Tracking Smartwatch',
      description: 'Stay on top of your fitness goals with this versatile and stylish smartwatch.',
      price: 199.99,
      gst: 0.18
    },
    {
      name: '4K TV',
      title: 'Ultra HD 4K Television',
      description: 'Experience crystal-clear visuals with this high-definition 4K television.',
      price: 849.99,
      gst: 0.18
    },
    {
      name: 'Tablet',
      title: 'High-Performance Tablet',
      description: 'A portable tablet with a high-resolution screen and long battery life.',
      price: 399.99,
      gst: 0.18
    },
    {
      name: 'Digital Camera',
      title: 'Compact Digital Camera',
      description: 'Capture stunning photos with this compact and easy-to-use digital camera.',
      price: 499.99,
      gst: 0.18
    },
    {
      name: 'Bluetooth Speaker',
      title: 'Portable Bluetooth Speaker',
      description: 'Enjoy your favorite tunes anywhere with this powerful and portable Bluetooth speaker.',
      price: 129.99,
      gst: 0.18
    },
    {
      name: 'Gaming Console',
      title: 'Next-Gen Gaming Console',
      description: 'Experience the latest in gaming with this cutting-edge console.',
      price: 399.99,
      gst: 0.18
    },
    {
      name: 'Home Router',
      title: 'High-Speed Home Router',
      description: 'Ensure fast and reliable internet throughout your home with this high-speed router.',
      price: 89.99,
      gst: 0.18
    },{
      name: 'E-Reader',
      title: 'High-Resolution E-Reader',
      description: 'Read your favorite books with ease on this high-resolution, glare-free e-reader.',
      price: 149.99,
      gst: 0.18
    },
    {
      name: 'Action Camera',
      title: 'Waterproof Action Camera',
      description: 'Capture your adventures with this durable and waterproof action camera.',
      price: 299.99,
      gst: 0.18
    }
  ];
  


}
