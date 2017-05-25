import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passo-1',
  templateUrl: './passo-1.component.html',
  styleUrls: ['./passo-1.component.css']
})
export class Passo1Component implements OnInit {
  private title: string = "O que comove você?";

  constructor() { }

  ngOnInit() {
    let result = {passo1: '', passo2: '', passo3: ''};
    localStorage.setItem('respQuiz', JSON.stringify(result));
  }

  log(num) {
    let newResp = localStorage.getItem('respQuiz');
    let aux = JSON.parse(newResp);

    aux.passo1 = num;
    localStorage.setItem('respQuiz', JSON.stringify(aux));
    console.log(num);
  }

}
