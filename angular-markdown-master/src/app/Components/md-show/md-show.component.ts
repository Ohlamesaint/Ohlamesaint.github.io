import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-show',
  templateUrl: './md-show.component.html',
  styleUrls: ['./md-show.component.css'],
})
export class MdShowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  blockquotes = require('raw-loader!./markdown/blockquotes.md').default;
  codeAndSynthaxHighlighting =
    require('raw-loader!./markdown/code-and-synthax-highlighting.md').default;
  emphasis = require('raw-loader!./markdown/emphasis.md').default;
  headers = require('raw-loader!./markdown/headers.md').default;
  horizontalRule = require('raw-loader!./markdown/horizontal-rule.md').default;
  images = require('raw-loader!./markdown/images.md').default;
  links = require('raw-loader!./markdown/links.md').default;
  lists = require('raw-loader!./markdown/lists.md').default;
  listsDot = require('raw-loader!./markdown/lists-dot.md').default;
  tables = require('raw-loader!./markdown/tables.md').default;
  title = 'markdown-example';
  public typescriptMarkdown = `
  \`\`\`typescript
  import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo',
  templateUrl: './markdown-demo.component.html',
  styleUrls: ['./markdown-demo.component.scss'],
})
export class MarkdownDemoComponent {
  public pipeMarkdown = '# Markdown';
}
\`\`\``;
  public math = `\`\`\`latex
  f(x) = \int_{-\infty}^\infty \hat f(i) e^{2 \pi i i x} di
  \`\`\``;
}
