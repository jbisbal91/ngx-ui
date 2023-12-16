import { Component, Input } from '@angular/core';
import { Tabs } from '../interfaces/tabs.interface';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.scss']
})
export class ComponentViewerComponent {

  @Input() tabs!: Tabs[];
  selectedTabContent: any = null;

  viewerSourceState = false;
  selectedTab!: number;
  subscriptions$: any = [];

  constructor() { }

  ngOnInit() {
    this.selectedTab = this.tabs && this.tabs.length > 0 ? 0 : -1;
  }

  toggleSourceViewer() {
    this.viewerSourceState = !this.viewerSourceState;
    this.getSelectedTabContent();
  }

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
    this.getSelectedTabContent();
  }

  getSelectedTabContent() {
      this.selectedTabContent = this.tabs[this.selectedTab].tabContent.code;  
  }

  copyToClipboard() {
   const subscription = this.tabs[this.selectedTab]?.tabContent?.code.subscribe((text:any) => {
     const textArea = document.createElement('textarea');

     textArea.style.position = 'fixed';
     textArea.style.top = '-999px';
     textArea.style.left = '-999px';
     textArea.style.width = '2em';
     textArea.style.height = '2em';
     textArea.style.padding = '0';
     textArea.style.border = 'none';
     textArea.style.outline = 'none';
     textArea.style.boxShadow = 'none';
     textArea.style.background = 'transparent';

     textArea.value = text;
     document.body.appendChild(textArea);

     textArea.select();

     try {
       const successful = document.execCommand('copy');
       const msg = successful ? 'successful' : 'unsuccessful';
       console.log(msg);
     } catch (err) {
       console.log('unable to copy');
     }

     document.body.removeChild(textArea);
   });
   this.subscriptions$.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub:any) => {
      sub.unsubscribe();
    });
  }
}
