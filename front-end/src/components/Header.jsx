import React from 'react';

const Header = (props) => {
  const title = <Header title="Trybeer" />;
  return (
    <div>
      <header className="title">
        <h1 data-testid="top-title">{props.title}</h1>
      </header>
      {/* <SideBar> */}
    </div>
  );
};

export default Header;
