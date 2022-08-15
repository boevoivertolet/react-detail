import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from './OnOff';




export default {
    title: 'Example/OnOff',
    component: OnOff,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;


const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//     primary: true,
//     label: 'Rating',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Rating',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Rating',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Rating',
// };
