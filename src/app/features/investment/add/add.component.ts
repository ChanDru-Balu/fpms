import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { assetClass } from '../../../core/common/interface/asset.interface';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { TextCaseDirective } from '../../../core/common/directive/text-case.directive';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ReviewComponent } from '../review/review.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, TextCaseDirective, MatSnackBarModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {

  fb = inject(FormBuilder);
  snackBar = inject(MatSnackBar);
  dialog = inject(MatDialog);

  assetClass = assetClass;
  assetClassOptions = Object.values(assetClass);

  investForm = this.fb.group({
    assetType: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    purchasePrice: ['', [Validators.required]],
    date: [new Date(), [Validators.required]]
  })

  ngOnInit() {
    this.assetClassOptions;
  }

  addInvestment() {
    if (!this.investForm.valid) {
      this.snackBar.open('Please fill all fields', 'X', { duration: 3000 });
    }
    console.log('Form:', this.investForm.value)
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '400px',
      data: this.investForm.value
    });

    dialogRef.afterClosed().subscribe(result => {
      // This will run after the dialog is closed
      console.log('Dialog closed with result:', result);
      this.snackBar.open('Investment added into portfolio','X',{duration: 2000})
      this.investForm.reset();
    });


  }


}
