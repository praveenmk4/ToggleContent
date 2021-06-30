import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Poc1';
  template: TemplateRef<any>;
  users: any;
  isFormVisible: boolean = false;
  ngOnInit() {
    this.users = [
      {
        name: 'John',
        age: 44,
      },
      {
        name: 'Jane',
        age: 42,
      },
      {
        name: 'Doe',
        age: 66,
      },
      {
        name: 'Dougles',
        age: 99,
      },
    ];
  }
  toggle(templateOne) {
    this.isFormVisible = !this.isFormVisible;
    if (this.isFormVisible) {
      this.showRef(templateOne);
    } else {
      this.showRef(null);
    }
  }
  showRef(template: TemplateRef<any>) {
    this.template = template;
  }
}
