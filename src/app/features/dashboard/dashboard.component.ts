import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { TableModule } from 'primeng/table';
import { AmountPipe } from "../../core/common/pipe/amount.pipe";
import { asset, assetClass } from '../../core/common/interface/asset.interface';
import { MatTableModule } from '@angular/material/table';
import { AssetService } from './asset.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule , AmountPipe , MatPaginatorModule , MatSortModule , MatButtonModule , MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit , AfterViewInit {

  displayedColumns: string[] = [];
  dataSource = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  public chart: any;

  assetDetails: asset[] = [];


  constructor(
    private router: Router,
    private assetService: AssetService
  ) {

  }

  ngOnInit(): void {
    this.assetService.getAssetDetails().subscribe((data) => {
      this.assetDetails = data;
      console.log("Details:",this.assetDetails)
    });
      this.displayedColumns = ['assetClass','amountInvested','percentage']
    // this.createChart();

  }

  ngAfterViewInit(){
    this.createChart();

  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['2025-05-10', '2025-05-11', '2025-05-12', '2025-05-13',
          '2025-05-14', '2025-05-15', '2025-05-16', '2025-05-17'],
        datasets: [
          {
            label: "Portfolio Value",
            data: [10467, 10576, 10572, 10779, 10892, 10974, 11073, 11176],
            borderColor: 'blue',
            backgroundColor: 'transparent',
            fill: false,
            tension: 0.3,
            pointRadius: 4
          },
          {
            label: "Benchmark (Nifty 50)",
            data: [10242, 10242, 10336, 10327, 10317, 10300, 10338, 10441],
            borderColor: 'limegreen',
            backgroundColor: 'transparent',
            fill: false,
            tension: 0.3,
            pointRadius: 4,
            borderDash: [5, 5] // Optional: makes benchmark dashed
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ₹${context.formattedValue}`
            }
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Portfolio Value (INR)'
            },
            beginAtZero: false
          },
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          }
        }
      }
    });

  }


  gotoAddInvestment() {
    this.router.navigateByUrl('investment/add')
  }

}
