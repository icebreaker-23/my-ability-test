import React from 'react';
import { Radio } from 'antd';

function VerbalAbility(props) {
  const {
    section,
  } = props;
  return (
    <div>
      {section && section.questions?.map((question) => (
        <div>
          {question.text}
          <Radio.Group onChange={() => { }} value={''}>
            {question.options.map((option) => (
              <Radio value={1}>{option.text}</Radio>
            ))}
          </Radio.Group>
        </div>
      ))}
    </div>
  );
}

export default VerbalAbility;
