export class Task{
    public isCompleted: boolean;
    public taskName: string;
    public isEditable: boolean;
    public month: Date;

    constructor(isCompleted: boolean, taskName: string, isEditable: boolean, month: Date){
        this.isCompleted=isCompleted;
        this.taskName=taskName;
        this.isEditable=isEditable;
        this.month=month;
    }
}