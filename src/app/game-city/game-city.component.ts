/* Developer: Niveditha K*/
/* Created Date: 06/05/2019*/
/* Component Name: GameCity*/
/* Purpose: take input from the user*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamecityService } from '../service/gamecity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {
  gameCityForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private gamecityservice: GamecityService, private router:Router) { }

 

  ngOnInit() {
    this.gameCityForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Z]{1}([a-z]){3,}')]],
      address: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('([0-9]){3,}')]]
    });
  }

  onsubmit()
  {
    console.log((this.gameCityForm.controls.amount.value)-100);

  // //   this.gameCityForm.controls.amount.value;
  //  return ((this.gameCityForm.controls.amount.value)-100);
    // amount1: string =this.gameCityForm.controls.amount.value);
    this.router.navigate(['play']);
  }

  }


