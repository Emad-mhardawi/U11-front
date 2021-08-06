import { createTheme } from "@material-ui/core/styles";


const theme = createTheme({
  palette:{
    common:{
      lightGrey: '#F4F5F7',
      mediumGrey:'#7F7F7F',
      lightGreen: 'rgba(84, 214, 44, 0.16)',
      darkGreen:'rgb(34, 154, 22)'
    },

  },

  shape:{
    borderRadius:15
  }
 
});

export default theme;
