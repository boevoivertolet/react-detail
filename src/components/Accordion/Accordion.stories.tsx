import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component: Accordion,

    /* argTypes: {
         backgroundColor: {control: 'color'},
     },*/
} /*as ComponentMeta<typeof Accordion>;*/

/*const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});

export const MenuCollapsedMode = () => <Accordion titleValue={'menu'} collapsed={true} onChange={callback}/>

MenuCollapsedMode2.args = {
    titleValue: 'menu',
    collapsed: true,
    onChange: callback

}
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>*/

const callback = action('accordion mode change event fired')
const callbackOnClick = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'menu'} collapsed={true} onChange={callback} items={[]}
                                                  onClick={callbackOnClick}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
                                                     items={[{title: 'Sasha', value: 1}, {
                                                         title: 'Ulya',
                                                         value: 2
                                                     }, {title: 'Taras', value: 3}]} onClick={callbackOnClick}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: 'Sasha', value: 1},
                          {title: 'Ulya', value: 2},
                          {title: 'Taras', value: 3}
                      ]}
                      onClick={(id) => {
                          alert(`user with ID ${id} should be happy`)
                      }}/>
}