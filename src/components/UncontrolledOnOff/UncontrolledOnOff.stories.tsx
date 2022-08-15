import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';




export default {
    title: 'Example/UncontrolledOnOff',
    component: UncontrolledOnOff,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOff>;


const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

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
