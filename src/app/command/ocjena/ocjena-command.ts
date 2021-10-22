export class OcjenaCommand {
  id: number;
  datumPolaganja: Date;
  vrijemePolaganja: string;
  ocjena: number;
  studentId: number;
  kolegijId: number;
  constructor(
    id: number,
    datumPolaganja: Date,
    vrijemePolaganja: string,
    ocjena: number,
    studentId: number,
    kolegijId: number
  ) {
    this.id = id;
    this.datumPolaganja = datumPolaganja;
    this.vrijemePolaganja = vrijemePolaganja;
    this.ocjena = ocjena;
    this.studentId = studentId;
    this.kolegijId = kolegijId;
  }
}
