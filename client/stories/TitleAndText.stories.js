import TitleAndText from '../components/TitleAndText';

export default {
  title: '/TitleAndText',
  component: TitleAndText,
  argTypes:{
    title:{
      description: "Set a title",
      table:{
        type: {
          summary: "string",
        },
      }
    },
    titleColor:{
        description: "Set a title color",
        table:{
          type: {
            summary: "string",
          },
        }
    },
    align:{
        description: "Align your text (center, left, right)",
        table:{
          type: {
            summary: "string",
          },
        }
    }
  }
};

const Template = (args) =>
    <TitleAndText {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  title: "This is a title",
  titleColor: 'red',
  align: 'right',
  children: (
      <p>
          this is a text example
      </p>
  )
};