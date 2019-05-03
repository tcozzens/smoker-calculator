import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reverse-flow',
  templateUrl: './reverse-flow.component.html',
  styleUrls: ['./reverse-flow.component.css']
})
export class ReverseFlowComponent {
  tankDimensionForm: FormGroup;
  exhaustStackForm: FormGroup;

  cookChamberVolume: number;
  fireboxCookChamberCutoutArea: number;
  areaUnderRfPlate: number;
  areaAtEndOfRfPlate: number;
  minimumFireboxVolume: number;
  fireboxAirInlets: number;
  exhaustStackVolume: number;
  exhaustStackLength: number;

  constructor(private formBuilder: FormBuilder) {
    this.tankDimensionForm = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      'width': ['', [Validators.required]],
      'length': ['', [Validators.required]]
    });

    this.exhaustStackForm = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      'diameter': ['', [Validators.required]]
    });

    this.tankDimensionForm.valueChanges.subscribe(x => {
      if (x.width && x.length) {
        const diameter = Number(x.width);
        const length = Number(x.length);
        this.cookChamberVolume = Math.round(10 * (diameter * diameter * 0.7854 * length)) / 10;

        this.fireboxCookChamberCutoutArea = Math.round(10 * (this.cookChamberVolume * 0.004)) / 10;

        this.areaUnderRfPlate = Math.round(10 * (this.cookChamberVolume * 0.004)) / 10;

        this.areaAtEndOfRfPlate = Math.round(10 * (this.cookChamberVolume * 0.004)) / 10;

        this.minimumFireboxVolume = Math.round(10 * (this.cookChamberVolume * 0.33)) / 10;

        this.fireboxAirInlets = Math.round(10 * (this.cookChamberVolume * 0.001)) / 10;

        this.exhaustStackVolume = Math.round(10 * (this.cookChamberVolume * 0.022)) / 10;
      }
    });

    this.exhaustStackForm.valueChanges.subscribe(x => {
      if (x.diameter) {
        this.exhaustStackLength = Math.round(10 * (this.exhaustStackVolume / (0.7854 * x.diameter * x.diameter))) / 10;
      }
    });


  }
}
