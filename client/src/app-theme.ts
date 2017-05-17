import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

//Custom Theme to change UI at application level
const CustomTheme = getMuiTheme({
  palette: {
    // Need to change based on requirments
    textColor: Colors.black,
    primary2Color: Colors.indigo700,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.darkBlack,
  },
  appBar: {
    height: 57,
    color: Colors.white
  },
  raisedButton: {
    primaryColor: '#2D459E',
    primaryTextColor: Colors.white
  },
  textField: {
    focusColor: '#2e469e',
    textColor: '#2e469e'
  }
});

function AppTheme(){
  //return getMuiTheme(lightBaseTheme);
  return CustomTheme;
}

export default AppTheme();
