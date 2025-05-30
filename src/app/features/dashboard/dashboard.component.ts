import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { TableModule } from 'primeng/table';
import { AmountPipe } from "../../core/common/pipe/amount.pipe";

@Component({
  selector: 'app-dashboard',
  imports: [AmountPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public chart: any;

  assetDetails = [
  {
    "assetClass": "Equities",
    "amountInvested": 400000,
    "percentage": 40
  },
  {
    "assetClass": "Bonds",
    "amountInvested": 250000,
    "percentage": 25
  },
  {
    "assetClass": "Real Estate / REITs",
    "amountInvested": 150000,
    "percentage": 15
  },
  {
    "assetClass": "Cash / Equivalents",
    "amountInvested": 100000,
    "percentage": 10
  },
  {
    "assetClass": "Commodities",
    "amountInvested": 50000,
    "percentage": 5
  },
  {
    "assetClass": "Cryptocurrency",
    "amountInvested": 50000,
    "percentage": 5
  }
]
 

  constructor(private router: Router) {

  }

  ngOnInit(): void {
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
