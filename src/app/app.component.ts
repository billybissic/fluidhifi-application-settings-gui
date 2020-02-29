import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLinear = false;
  projectInfoFormGroup: FormGroup;
  projectTagsFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  createOrOpenNewProject: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createOrOpenNewProject = this._formBuilder.group({
      existingProjectCtrl: [''],
      projectNameCtrl: ['']
    });

    this.projectInfoFormGroup = this._formBuilder.group({
      projectDescriptionCtrl: ['', Validators.required],
      projectVersionCtrl: ['', Validators.required],
      projectTitleCtrl: ['', Validators.required],
      projectTOS: ['', Validators.required],
      contactCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      licenseCtrl: ['', Validators.required],
      licenseNameCtrl: ['', Validators.required],
      licenseUrl: ['', Validators.required],
      hostCtrl: ['', Validators.required],
      basePathCtrl: ['', Validators.required]
    });
    this.projectTagsFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      externalDocDescCtrl: ['', Validators.required],
      externalDocUrlCtrl: ['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group( {
      finalizationDescCtrl: ['', Validators.required],
      finalizationURLCtrl: ['', Validators.required]
    });
  }
}
