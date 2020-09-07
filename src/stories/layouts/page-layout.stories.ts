import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import PageLayoutComponent from './page-layout.component';

import { Story, Meta } from '@storybook/angular/types-6-0';


export default {
    title: 'Components/PageLayout',
    component: PageLayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule],
        }),
    ],
} as Meta;

export const Primary = () => ({
    component: PageLayoutComponent,

});
