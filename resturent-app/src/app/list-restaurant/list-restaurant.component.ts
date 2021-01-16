import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
public collection:any;
  constructor(private commonService:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
  this.commonService.getRestoList().subscribe((result)=>{
    this.collection=result;
    console.log(this.collection)
  });

 
}
deleteResto(resto){
  this.collection.splice(resto.id)
  this.commonService.deleteResto(resto).subscribe((result)=>{
    console.log("data deleted successfully")
    alert("data deleted successfully")
  })
}

}
