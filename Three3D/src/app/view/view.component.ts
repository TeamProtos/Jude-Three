import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import * as THREE2 from "three-full";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, AfterViewInit {

  scene = null;
  objLoader = null;

  constructor() {
    this.scene = new THREE.Scene;
    this.objLoader = new THREE.OBJLoader;
   //this.scene = new THREE.Scene();
    //this.objLoader = new THREE.OBJLoade();
    console.log("111");
   }

  


   

  //  this.objLoader.load(
  //    "./assets/table1.obj",
  //    //"./assets/table_re.obj",
  //    (object) => {
  //      this.scene.add(object);

  //      this.animate();
  //      console.log("===========loaded");
  //    },
  //    (xhr) => {
  //      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  //    },
  //    (error) => {
  //      console.log('An error happened');
  //    }
  //  )
   
  
  ngOnInit() {  
    console.log("333");
  }

}
