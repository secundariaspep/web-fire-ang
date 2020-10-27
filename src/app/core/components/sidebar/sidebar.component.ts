import {Component} from '@angular/core';
import {routes} from '@core/config';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MatDialog} from '@angular/material/dialog';


const TREE_DATA: any = [
  {
    name: 'SPEP',
    children: [
      {name: 'Product Manage', route: routes.USER_LIST, active: 'active'},
      {name: 'Products Grid', route: routes.USER_LIST, active: 'active'},
      {name: 'Product Page', route: routes.USER_LIST, active: 'active'},
    ]
  },
  {
    name: 'User',
    children: [
      { name: 'User List', route: routes.USER_LIST, active: 'active' },
      { name: 'User Add', route: routes.USER_ADD, active: 'active' },
      { name: 'User Edit', route: routes.USER_EDIT, active: 'active' },
    ]
  }
];

const TemplateNode: any = [
  {
    name: 'Socio Educativo',
    children: [
      { name: 'Typography', route: routes.TYPOGRAPHY, active: 'active' },
      { name: 'Colors', active: 'active' },
      { name: 'Grid', active: 'active' },
    ]
  },
];


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;


  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      route: node.route,
      active: node.active
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  templateDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
    this.templateDataSource.data = TemplateNode;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  public stopPropagation(event){
    event.stopPropagation();
  }
}
