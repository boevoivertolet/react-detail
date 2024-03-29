import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from './Rating';




export default {
    title: 'Rating',
    component: Rating,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;


const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

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
