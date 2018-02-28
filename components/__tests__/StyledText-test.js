import 'react-native';
import React from 'react';
import { CeraText } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<CeraText>Snapshot test!</CeraText>).toJSON();

  expect(tree).toMatchSnapshot();
});
