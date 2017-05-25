import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passo-2',
  templateUrl: './passo-2.component.html',
  styleUrls: ['./passo-2.component.css']
})
export class Passo2Component implements OnInit {
  private title: string = "O que comove você?";

  constructor() { }

  ngOnInit() {
  }

  log(num) {
    let newResp = localStorage.getItem('respQuiz');
    let aux = JSON.parse(newResp);

    aux.passo2 = num;
    localStorage.setItem('respQuiz', JSON.stringify(aux));
    console.log(num);
  }

}
