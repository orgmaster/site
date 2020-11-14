import React from 'react'
import Button from '../components/Button';

export default {
  title: '/Button',
  component: Button,
  argTypes:{
    outline:{
      description: "Choose outline or fill style",
      table:{
        type: {
          summary: "boolean",
        },
      }
    }
  }
};

const Template = (args) => <Button {...args} >Click me!</Button>;

export const Fill = Template.bind({});
Fill.args = {
  outline: false,
  color: 'red'
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  color: 'dark'
};
