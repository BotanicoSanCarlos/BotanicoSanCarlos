import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-editor-de-texto',
  templateUrl: './editor-de-texto.component.html',
  styleUrls: ['./editor-de-texto.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EditorDeTextoComponent implements OnInit, OnDestroy {
  editor!: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  colorPresets = ['red', '#FF0000', 'rgb(255, 0, 0)'];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor({ history: true });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  submit() {
    console.log(this.form.value.editorContent);
    console.log(this.form);
  }
}
