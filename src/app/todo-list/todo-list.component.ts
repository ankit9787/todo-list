import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  item_name: string;
  items: string[] = [];
  itemsChecked: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.itemsChecked.push('call repair man');
  }

  add_item(itemName) {
    this.items.push(itemName);
  }

  checkedItems(itemName) {
    this.itemsChecked.push(itemName);
  }

  refresh_list(event, value) {
    if (event.target.checked == true) {
      this.items = this.items.filter((item) => item != value);
      this.itemsChecked.push(value);
    } else if (event.target.checked == false) {
      this.itemsChecked = this.itemsChecked.filter((item) => item != value);
      this.items.push(value);
    }
  }
}
