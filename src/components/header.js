// import libraries for making a components
import React from 'react';
import { Text } from 'react-native';

// make a component
const Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// make the component available to the other parts of the app
export default Header;
