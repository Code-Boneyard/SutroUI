import { SharedModule } from './../../app/shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

import PageLayoutComponent from './page-layout.component';
import { Story, Meta } from '@storybook/angular/types-6-0';


export default {
    title: 'Components/PageLayout',
    component: PageLayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SharedModule],
        }),
    ],
} as Meta;

export const Primary = () => ({
    component: PageLayoutComponent,

});
