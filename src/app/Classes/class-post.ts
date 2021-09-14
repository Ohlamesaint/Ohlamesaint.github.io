import { PostInterface } from "../Interfaces/post";

export class ClassPost implements PostInterface {
    
    id: number = 0;
    className: String = "";
    teacher: String = "";
    semester: String = "";
    markdown: string = "";

    createTime: Date = new Date();
    updateTime: Date = new Date();
    postTime: Date = new Date();
}