import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';

@Component({
  selector: 'projecttree-view',
  templateUrl: './projectTree.html',
})

export class ProjectTree {

  treePjs: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };

  constructor() {
  }

}
