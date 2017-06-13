import { SprintService } from './../../../../../model/sprint/sprint.service';
import { UserModel } from './../../../../../model/user/user.model';
import { SprintModel } from './../../../../../model/sprint/sprint.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sprinttree-view',
  templateUrl: './sprintTree.html',
})
  
export class SprintTree{

  @Input('iSlot') slot : number;
  slots: any[];

  sprintList: SprintModel[];

  constructor(private _sprintService:SprintService) {
  }

  ngOnChanges(changes: SimpleChanges) {
      // only run when property "data" changed
      if (changes['slot']) {
        this._sprintService.getSprintFromProject(this.slot).subscribe((data : SprintModel[]) => {
              this.slots = new Array(data.length);
        });;
      }
  }

  public getNumber(elems : number){
    this.slots = new Array(elems);
  }

  redirectTaskPanel(id:number){
      
  }

  selectedSprint(value) : void {
    this._sprintService.setSelectedSprint(value);
  }
}
