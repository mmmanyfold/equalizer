import React from 'react';
import { Text, Platform } from 'react-native';

export class CeraText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'cera', ...Platform.select({ ios: { marginTop: 8 } }) }]} />;
  }
}

export class CeraTextBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'cera-bold', ...Platform.select({ ios: { marginTop: 8 } }) }]} />;
  }
}

export class CeraTextItalic extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'cera-italic', ...Platform.select({ ios: { marginTop: 8 } }) }]} />;
  }
}
