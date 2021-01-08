import React from 'react';

const Progress = () => (
  <section>
    <div style={ { fontSize: '13px' } }>
      Evolução do Projeto
      <meter id="progress" value="1" min="0" max="13">
        1 out of 13 requirements done
      </meter>
    </div>
  </section>
);

export default Progress;
