import 'react-native'
import React from 'react'
import  renderer from 'react-test-renderer'
import Demo from '../src/components/Demo'


test('renders correctly',()=>{
    const tree =renderer.create(<Demo/>).toJSON();
    expect(tree).toMatchSnapshot();
})