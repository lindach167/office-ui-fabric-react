import * as React from 'react';
import {
  Link
} from '../../../components/index';
import {
  ExampleCard,
  PropertiesTableSet
} from '../../components/index';
import CheckboxBasicExample from './examples/Checkbox.Basic.Example';
let CheckboxBasicExampleCode = require('./examples/Checkbox.Basic.Example.tsx');

export default class CheckboxExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='CheckboxExample'>
        <h1 className='ms-font-xxl'>CheckBox</h1>
        <div><Link target='_blank' text='CheckBoxes' url='http://dev.office.com/fabric/components/checkbox' /> allow the user to enable or disable a setting.</div>

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='Checkboxes' code={ CheckboxBasicExampleCode }>
          <CheckboxBasicExample />
        </ExampleCard>

        <PropertiesTableSet componentName='Checkbox' />
      </div>
    );
  }
}