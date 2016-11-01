import { Component } from '@angular/core';

@Component({
    selector: 'v-lab-up-down-splitter-tester',
    template: `
        <v-lab-left-right-splitter>
            <div left-pane>
                blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, 
            </div>
            
            <div right-pane>
                <v-lab-up-down-splitter [upHeight]="600" [splitterHeight]="50">
                    <div up-pane>
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                        be be be
                    </div>
                    <div down-pane>
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                        down down down
                    </div>
                </v-lab-up-down-splitter>
            </div>
        </v-lab-left-right-splitter>
    `,
    styles: [`
        :host {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: 0;
            padding: 0;
        }
    `]
})
export class UpDownSplitterTesterComponent {

}
