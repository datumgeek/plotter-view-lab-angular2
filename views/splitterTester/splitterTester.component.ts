import { Component } from '@angular/core';

@Component({
    selector: 'v-lab-splitter-tester',
    template: `
        <p-left-right-splitter>
            <div left-pane>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, feugiat sed posuere vel, porta ac lacus. Nunc convallis luctus felis, vitae ullamcorper ex imperdiet suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris molestie, lectus eu tincidunt vulputate, ligula mi sodales tortor, a facilisis lectus purus euismod arcu. Ut euismod libero risus, id interdum lectus iaculis nec. Sed et justo vel nisl vestibulum posuere ac a lectus. Phasellus commodo egestas varius. Sed eget nulla elit. Fusce sagittis condimentum suscipit. Quisque ut dui id dui pellentesque scelerisque a id sem.

                Nam pharetra orci erat, a malesuada magna tempor quis. Nunc lobortis eu magna vitae pellentesque. Integer vehicula dui vel rhoncus porta. Curabitur vulputate nunc sed est placerat, in convallis nulla pretium. Praesent ullamcorper, magna vel feugiat imperdiet, leo elit sollicitudin turpis, sed dictum nibh dolor sed tortor. Morbi sed sapien orci. Suspendisse et accumsan arcu, eu ultrices ligula. In hac habitasse platea dictumst. In egestas finibus lacinia. Phasellus gravida orci in porta vestibulum.

                Phasellus a odio odio. Duis suscipit vel ex sit amet efficitur. Maecenas in ultricies urna. Mauris ex orci, rhoncus eu sagittis iaculis, viverra vel sem. Vestibulum rhoncus, lorem sit amet laoreet cursus, ipsum risus iaculis erat, vel fringilla velit ipsum vitae nulla. Pellentesque sit amet nisl interdum, laoreet erat non, pharetra nunc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fermentum leo ac finibus tempus. Vestibulum a aliquam ipsum, id molestie odio. Donec tincidunt malesuada leo, non hendrerit felis malesuada quis.

                Mauris quis est quis elit auctor semper et ut ante. Duis semper maximus ante et rhoncus. Etiam malesuada feugiat bibendum. Nam maximus risus sit amet ipsum dignissim mattis. Nulla eleifend nibh a diam facilisis, sit amet mattis libero porta. Integer rutrum non diam a pretium. Vivamus tempus tellus sed gravida euismod. Nam quis accumsan felis.

                Nam arcu metus, molestie et tempor vel, rhoncus sit amet est. Aliquam non tincidunt odio. Etiam ultrices aliquet condimentum. Pellentesque eleifend felis non neque condimentum, consequat porttitor velit convallis. Sed iaculis tempus mi, ac vulputate purus. Integer faucibus justo ut varius pellentesque. Fusce rutrum nunc at gravida tempus. Ut rhoncus sapien ac mollis luctus. Vivamus lorem turpis, tempor at tortor at, ornare rhoncus nisl. Maecenas blandit vehicula nibh, vitae dapibus tellus egestas ac. Duis sed justo neque. Maecenas eu quam et odio accumsan ultrices. Donec suscipit purus ut porta mattis. Praesent id augue ut tortor tempus volutpat non sit amet est. Suspendisse fermentum convallis magna feugiat volutpat.
            </div>
            <div right-pane>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, feugiat sed posuere vel, porta ac lacus. Nunc convallis luctus felis, vitae ullamcorper ex imperdiet suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris molestie, lectus eu tincidunt vulputate, ligula mi sodales tortor, a facilisis lectus purus euismod arcu. Ut euismod libero risus, id interdum lectus iaculis nec. Sed et justo vel nisl vestibulum posuere ac a lectus. Phasellus commodo egestas varius. Sed eget nulla elit. Fusce sagittis condimentum suscipit. Quisque ut dui id dui pellentesque scelerisque a id sem.

                Nam pharetra orci erat, a malesuada magna tempor quis. Nunc lobortis eu magna vitae pellentesque. Integer vehicula dui vel rhoncus porta. Curabitur vulputate nunc sed est placerat, in convallis nulla pretium. Praesent ullamcorper, magna vel feugiat imperdiet, leo elit sollicitudin turpis, sed dictum nibh dolor sed tortor. Morbi sed sapien orci. Suspendisse et accumsan arcu, eu ultrices ligula. In hac habitasse platea dictumst. In egestas finibus lacinia. Phasellus gravida orci in porta vestibulum.

                Phasellus a odio odio. Duis suscipit vel ex sit amet efficitur. Maecenas in ultricies urna. Mauris ex orci, rhoncus eu sagittis iaculis, viverra vel sem. Vestibulum rhoncus, lorem sit amet laoreet cursus, ipsum risus iaculis erat, vel fringilla velit ipsum vitae nulla. Pellentesque sit amet nisl interdum, laoreet erat non, pharetra nunc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fermentum leo ac finibus tempus. Vestibulum a aliquam ipsum, id molestie odio. Donec tincidunt malesuada leo, non hendrerit felis malesuada quis.

                Mauris quis est quis elit auctor semper et ut ante. Duis semper maximus ante et rhoncus. Etiam malesuada feugiat bibendum. Nam maximus risus sit amet ipsum dignissim mattis. Nulla eleifend nibh a diam facilisis, sit amet mattis libero porta. Integer rutrum non diam a pretium. Vivamus tempus tellus sed gravida euismod. Nam quis accumsan felis.

                Nam arcu metus, molestie et tempor vel, rhoncus sit amet est. Aliquam non tincidunt odio. Etiam ultrices aliquet condimentum. Pellentesque eleifend felis non neque condimentum, consequat porttitor velit convallis. Sed iaculis tempus mi, ac vulputate purus. Integer faucibus justo ut varius pellentesque. Fusce rutrum nunc at gravida tempus. Ut rhoncus sapien ac mollis luctus. Vivamus lorem turpis, tempor at tortor at, ornare rhoncus nisl. Maecenas blandit vehicula nibh, vitae dapibus tellus egestas ac. Duis sed justo neque. Maecenas eu quam et odio accumsan ultrices. Donec suscipit purus ut porta mattis. Praesent id augue ut tortor tempus volutpat non sit amet est. Suspendisse fermentum convallis magna feugiat volutpat.
            </div>
        </p-left-right-splitter>
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
export class SplitterTesterComponent {

}
