export class Users {
    
    id: string;
    employeeName: string;
    start: string;
    end: string;
    entryNotes: string;
    deletedOn: string;

    constructor(id: string, employeeName: string, start: string, end: string, entryNotes: string, deletedOn: string) {
        this.id = id;
        this.employeeName = employeeName;
        this.start = start;
        this.end = end;
        this.entryNotes = entryNotes;
        this.deletedOn = deletedOn;
    }
    
}