import React, { useState } from 'react';
import { Button, Input, Radio, Select } from 'antd';
import './Login.css';

const inputValuesInit = {
  name: '',
  sex: '',
  standard: '',
};

function Login() {
  const [inputValues, setInputValues] = useState(inputValuesInit);

  const handleChange = (event) => {
    setInputValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleStandardChange = (event) => {
    setInputValues(prevState => ({ ...prevState, 'standard': event }));
  };

  return (
    <div className='login-form'>
      <Input placeholder="Basic usage" style={{ width: '50%' }} name='name' value={inputValues.name} onChange={handleChange} />

      <Radio.Group onChange={handleChange} value={inputValues.sex} name='sex'>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>

      <Select
        placeholder="Select a standard"
        style={{
          width: 120,
        }}
        className='select-style'
        value={inputValues.standard}
        onChange={handleStandardChange}
        options={[
          {
            value: '9',
            label: <>9<sup>th</sup> Standard</>,
          },
          {
            value: '10',
            label: <>10<sup>th</sup> Standard</>,
          },
          {
            value: '11',
            label: <>11<sup>th</sup> Standard</>,
          },
          {
            value: '12',
            label: <>12<sup>th</sup> Standard</>,
          },
        ]}
      />

      <Button type="primary">Login</Button>
    </div>
  );
}

export default Login;
