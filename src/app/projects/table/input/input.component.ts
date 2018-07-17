import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from '../table.service';
import { Point } from '../point.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  pointForm: FormGroup;
  student: Point;
  id: number;



  constructor(private tableService: TableService) { }
  onSubmit() {
    this.tableService.addStudent(this.pointForm.value);
    console.log(this.pointForm.value);
    this.pointForm.reset();

  }

  ngOnInit() {
    console.log(this.student);
    this.tableService.studentSelected.subscribe((id) => {
      this.id = id;
      this.student = this.tableService.getStudent(id);
      console.log(this.student);
      this.pointForm = new FormGroup({
        'name': new FormControl(this.student.name, Validators.required),
        'aclass': new FormControl(this.student.aclass, [Validators.required]),
        'math': new FormControl(this.student.math, [Validators.required, this.checkPoint]),
        'physical': new FormControl(this.student.physical, [Validators.required, this.checkPoint]),
        'chemistry': new FormControl(this.student.chemistry, [Validators.required, this.checkPoint]),
      });
    });
    this.pointForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'aclass': new FormControl(null, [Validators.required]),
      'math': new FormControl(null, [Validators.required, this.checkPoint]),
      'physical': new FormControl(null, [Validators.required, this.checkPoint]),
      'chemistry': new FormControl(null, [Validators.required, this.checkPoint]),
    });
  }



  checkPoint(control: FormControl): { [s: string]: boolean } {
    if (control.value < 0 || control.value > 10) {
      return { 'check-point': true };
    }
    return null;

  }
  onUpdate() {
    this.tableService.updateStudent(this.id, this.pointForm.value);

  }

}
