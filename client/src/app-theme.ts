import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

//Custom Theme to change UI at application level
const CustomTheme = getMuiTheme({
  palette: {
    // Need to change based on requirments
    textColor: Colors.black,
    primary2Color: Colors.indigo700,
    primary1Color: Colors.indigo700,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.darkBlack,
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
  },
  stepper: 
  {
    iconColor:"#2e469e"
  }
});

function AppTheme(){
  return CustomTheme;
}

export default AppTheme();
