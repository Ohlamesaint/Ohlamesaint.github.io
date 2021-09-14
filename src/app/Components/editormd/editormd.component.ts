import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EditorConfig } from '../../Directives/editor/model/editor-config';

declare var $: any;
declare var editormd: any;
@Component({
  selector: 'app-editormd',
  templateUrl: './editormd.component.html',
  styleUrls: ['./editormd.component.css'],
})
export class EditormdComponent implements OnInit, OnChanges {

  constructor( private router: Router, ) { }

  editor: any;
  conf = new EditorConfig();
  buffer: string = "";
  @Input() markdown: string = ''; //编辑器内容
  @Output() markdownChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges){
    this.conf.markdown = changes.markdown.currentValue;
    this.createEditor();
  }

  ngOnInit(): void {
  }
  
  updateMarkdown(){
    this.markdownChange.emit(this.buffer);
  }

  createEditor() {
    this.editor = editormd('editormd', this.conf); 
    $('#editormd .editormd-markdown-textarea')[0].innerHTML = this.conf.markdown;
    this.buffer = this.conf.markdown;
    this.editor.on('change', () => {
      const textarea = $('#editText');
      const value = {
        textarea: textarea.val(),
      };
      this.buffer = value.textarea;
    });
  }
}
