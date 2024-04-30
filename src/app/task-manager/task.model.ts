export class Task{
    public isCompleted: boolean;
    public taskName: string;
    public isEditable: boolean;

    constructor(isCompleted: boolean, taskName: string, isEditable: boolean){
        this.isCompleted=isCompleted;
        this.taskName=taskName;
        this.isEditable=isEditable;
    }
}