import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from './Accordion';




export default {
    title: 'Example/Accordion',
    component: Accordion,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

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
