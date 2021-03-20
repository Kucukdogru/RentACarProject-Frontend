import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/dtos/customerDetailDto';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerDetailDtos:CustomerDetailDto[]=[];
  dataLoaded=false;

  constructor(private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerDetailService.getCustomerDetails().subscribe(response=>{
      this.customerDetailDtos=response.data;
      this.dataLoaded=true;
    })
  }
}
