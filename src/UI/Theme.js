import { createTheme } from "@material-ui/core/styles";


const theme = createTheme({
  palette:{
    common:{
      lightGrey: '#F4F5F7',
      mediumGrey:'#7F7F7F',
      lightGreen: 'rgba(84, 214, 44, 0.16)',
      darkGreen:'rgb(34, 154, 22)',
      boxShadowLight: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
    },

  },

  shape:{
    borderRadius:15
  }
 
});

export default theme;
