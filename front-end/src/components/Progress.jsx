import React from 'react';

const Progress = () => {
  return (
    <div>
      <label htmlFor="progress" style={{ fontSize: '13px' }}>
        Evolução do Projeto
      </label>
      <meter id="progress" value="1" min="0" max="13">
        1 out of 13 requirements done
      </meter>
    </div>
  );
};

export default Progress;
