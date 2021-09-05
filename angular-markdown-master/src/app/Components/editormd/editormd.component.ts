import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../../Directives/editor/model/editor-config';
declare var $: any;
declare var editormd: any;
@Component({
  selector: 'app-editormd',
  templateUrl: './editormd.component.html',
  styleUrls: ['./editormd.component.css'],
})
export class EditormdComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  editor: any;
  conf = new EditorConfig();
  public showInfo: string = ''; //编辑器内容

  ngAfterViewInit(): void {
    this.createEditor();
  }

  createEditor() {
    this.editor = editormd('markdown', this.conf); // 创建编辑器
    // //解决右侧预览偶尔显示不出来的问题(编辑功能下的md)
    $('#markdown.editormd-preview-container')[0].innerHTML = this.showInfo;
    // 在没有开预览模式下获取编辑状态下的值
    // let iputData = $('#markdown .editormd-markdown-textarea').val();
    // 编辑器事件监听
    this.editor.on('change', () => {
      const textarea = $('#editText');
      const value = {
        textarea: textarea.val(),
      };
      this.showInfo = value.textarea;
    });
  }
}
