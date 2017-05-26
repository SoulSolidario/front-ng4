import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passo-3',
  templateUrl: './passo-3.component.html',
  styleUrls: ['./passo-3.component.css']
})
export class Passo3Component implements OnInit {
  private title: string = "O que comove você?";

  constructor() { }

  ngOnInit() {
  }

  log(num) {
    let newResp = localStorage.getItem('respQuiz');
    let aux = JSON.parse(newResp);

    aux.passo3 = num;
    localStorage.setItem('respQuiz', JSON.stringify(aux));
  }

}
