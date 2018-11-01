import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from "../services/product.serivce";

@Component({
  templateUrl:'./reactive-form.html' 
})
export class ReactiveFormComponent {
  frm: FormGroup;
  success: boolean;

  constructor(fb: FormBuilder, private productSvc: ProductService) {
    //Form
    this.frm = fb.group({
      brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required]],
      inStock: [],
      phone:['',[Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]]
    });
  }

  onSave() {
    if (this.frm.valid) {
      this.productSvc.save(this.frm.value)
        .subscribe(res => {
          this.success = true;
          this.frm.reset();
        }, err => console.log(err));
    }
    else {
      console.log("Validation failed");
    }
  }

}