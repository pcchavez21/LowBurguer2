import { Component, OnInit } from '@angular/core';
import { WsService} from '../../../services';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  fechaInicio = "2020-11-20";
  fechaFinal = "2020-11-26";
  top=[];


  constructor(private ws: WsService) { }

  ngOnInit(): void {
    this.ws.WS_GRAPH(this.fechaInicio,this.fechaFinal).subscribe(data => {
      this.top = data['graph_data'][0]['pie-chart'];
      console.log(this.top);
      console.log(this.top[0]['name']);
      console.log(this.top[0]['porcentaje']);
    });
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#373740'
      },
      title: {
        text: 'Productos más vendido por cantidad',
        style: {
          color: '#fff'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Productos  ',
        colorByPoint: true,
        data: [/*{
          name: this.top[0]['name'].toString(),
          y: parseFloat(this.top[0]['porcentaje']),
          sliced: true,
          selected: true
        }, {
          name: this.top[1]['name'].toString(),
          y: parseFloat(this.top[1]['porcentaje'])
        }, {
          name: this.top[2]['name'].toString(),
          y: parseFloat(this.top[2]['porcentaje'])
        }, {
          name: this.top[3]['name'].toString(),
          y: parseFloat(this.top[3]['porcentaje'])
        }*/
          {
            name: 'a',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Edge',
            y: 4.67
          }]
      }]
    }
  }

}
