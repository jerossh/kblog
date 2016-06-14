import React from 'react';
import HeaderContainer from '../containers/headerContainer';

const App = ({ children }) => (
    <div>
        <HeaderContainer />
        <div className="container">{children}</div>
    </div>
);

export default App;

