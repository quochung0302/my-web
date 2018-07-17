import { Point } from './point.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TableService {
    studentChanged = new Subject<Point[]>();
    studentSelected = new Subject<number>();


    students: Point[] = [
        new Point('Ngo Quoc Hung', '12A', 7, 8, 9),
        new Point('Vu Huu Dong', '12A', 8, 6, 9),
        new Point('Bui Minh Tri', '12A', 6, 5, 8),
        new Point('Dinh Thu Trang', '12A', 9, 10, 7),



    ];
    addStudent(student: Point) {
        this.students.push(student);
        this.studentChanged.next(this.students.slice());
    }
    getStudents() {
        return this.students.slice();
    }
    removeStudent(index: number) {
        this.students.splice(index, 1);
        this.studentChanged.next(this.students.slice());


    }
    updateStudent(index: number, student: Point) {
        this.students[index] = student;
        this.studentChanged.next(this.students.slice());


    }
    getStudent(index: number) {
        return this.students[index];

    }

}
