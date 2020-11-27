import { Component, OnInit } from '@angular/core';
import { WsService} from '../../../services';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  fechaInicio = "2020-11-20";
  fechaFinal = "2020-11-26";
  top=[];

  constructor(private ws: WsService) { }

  ngOnInit(): void {
    this.ws.WS_GRAPH(this.fechaInicio,this.fechaFinal).subscribe(data => {
      this.top = data['graph_data'][0]['pie-chart'];
      console.log(data);
      console.log(this.top[0]['name']);
      console.log(this.top[0]['porcentaje']);
    });
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,.5)'
      },
      title: {
        text: 'Ventas en el dia'
      },
      subtitle: {
        text: 'Static Info'
      },
      xAxis: {
        categories: [
          this.top[0]['name'].toString(),
          this.top[1]['name'].toString(),
          this.top[2]['name'].toString(),
          this.top[3]['name'].toString()
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      colors: ['#fff'],
      series: [{
        name: 'Porcentaje de ventas',
        data: [
          parseFloat(this.top[0]['porcentaje']),
          parseFloat(this.top[1]['porcentaje']),
          parseFloat(this.top[2]['porcentaje']),
          parseFloat(this.top[3]['porcentaje'])
        ]
      }]
    }
  }

}
