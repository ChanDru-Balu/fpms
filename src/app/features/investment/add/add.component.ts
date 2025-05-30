import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {


  fb = inject(FormBuilder);

  investForm = this.fb.group({
    assetType : [''],
    quantity : [''],
    purchasePrice: [''],
    date: [new Date()] 
  })

  addInvestment() {
    console.log('Form:',this.investForm.value)
  }


}
