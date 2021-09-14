import { PostInterface } from '../Interfaces/post';

export class Post implements PostInterface{
    
    // Post Id
    id: number = 0;
    // Post 名稱
    postName: String = "";
    // Post 是否已發佈
    active: Boolean = false;
    // Post 內容類別
    category: String = "";
    
    /////////////////////////////////////////////////
    // Post 是否為隨堂筆記
    isClass: Boolean = false;
    // Post 是否為系列文章
    isSeries: Boolean = false;           
    // 若為隋堂筆記，則課程名稱
    className: String = "";
    // 若為系列文章，則系列名稱
    seriesName: String = "";
    // 需 trigger disable，不可同時為 class 與 series //

    // 文章內容
    markdown: string = "";

    // 文章建立時間
    createTime: Date = new Date();
    // 文章更新時間
    updateTime: Date = new Date();
    // 文章發佈時間
    postTime: Date = new Date();
}
