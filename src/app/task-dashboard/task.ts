export interface Task {
    title: string,
    tags: string,
    completed: boolean,
    createdDate: Date, // can be handled by the backend and return to Task? 
    dueDate: Date,
    id: number;
}