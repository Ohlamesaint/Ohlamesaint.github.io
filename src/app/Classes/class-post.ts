import { PostInterface } from "../Interfaces/post";

export class ClassPost implements PostInterface {
    
    id: number = 0;
    name: String = "";
    teacher: String = "";
    semester: String = "";
    markdown: string = "";
    classType: String = "";
}