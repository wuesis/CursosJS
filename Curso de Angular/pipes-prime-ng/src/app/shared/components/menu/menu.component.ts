import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Date and Text',
        icon: 'pi pi-aling-left ',
        items: [
          {
          label: 'Numbers',
          icon: 'pi pi-fw pi-dollar'
        },
        {
          label: 'Uncommon',
          icon: 'pi pi-fw pi-globe'
        }]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog ',
        items: [
          {
            label: 'Others',
            icon: 'pi pi-fw pi-globe'
          }
        ]
      }
    ]
  };

}
