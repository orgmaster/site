import Section from '../components/Section';

export default {
  title: '/Section',
  component: Section,
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

const Template = (args) => <Section {...args} >Hello word!</Section>;

export const Gradient = Template.bind({});
Gradient.args = {
  bg: "red",
  gradient: true
};

export const Simple = Template.bind({});
Simple.args = {
  bg: "light",
  gradient: false
};