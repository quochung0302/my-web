import { Component, OnInit } from '@angular/core';
import { Point } from '../point.model';
import { TableService } from '../table.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  students: Point[];
  sMath = false;
  sPhysical = false;
  sChemistry = false;
  sTb = false;
  sName = false;
  fHSG = false;
  id: number;
  selectStudent(id: number) {
    this.id = id;
    this.tableService.studentSelected.next(id);

  }



  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.students = this.tableService.getStudents();
    this.tableService.studentChanged.subscribe((students: Point[]) => {
      this.students = students;

    });
  }
  sortMath() {
    this.sMath = !this.sMath;
    this.students.sort((a, b) => {
      if (this.sMath) {
        return (a.math - b.math);
      }
      return (b.math - a.math);
    });
  }
  sortPhysical() {
    this.sPhysical = !this.sPhysical;
    this.students.sort((a, b) => {
      if (this.sPhysical) {
        return (a.physical - b.physical);
      }
      return (b.physical - a.physical);
    });
  }
  sortChemistry() {
    this.sChemistry = !this.sChemistry;
    this.students.sort((a, b) => {
      if (this.sChemistry) {
        return (a.chemistry - b.chemistry);
      }
      return (b.chemistry - a.chemistry);
    });
  }
  sortTb() {
    this.sTb = !this.sTb;
    this.students.sort((a, b) => {
      if (this.sTb) {
        return ((a.math + a.chemistry + a.physical) - (b.math + b.chemistry + b.physical));
      }
      return ((b.math + b.chemistry + b.physical) - (a.math + a.chemistry + a.physical));
    });
  }
  findHSG() {
    this.fHSG = !this.fHSG;

    if (this.fHSG) {
      this.students = this.students.filter((item) => {
        return ((item.math + item.chemistry + item.physical) / 3 >= 8);
      });
      console.log(this.students);
    } else {
      this.students = this.tableService.getStudents();
    }
  }
  removeStudent(index: number) {
    this.tableService.removeStudent(index);

  }
  windowOnClick(){
    this.id = null;
  }


}
