import React from 'react';
import PropTypes from 'prop-types';
import MainSearch from './MainSearch';
import MainNav from './MainNav';

export default function MainTop(props) {
  const { isLogin, searchClick, loginHandle } = props;
  return (
    <div className="mainTop">
      <div className="mainTop_SnN">
        <MainSearch className="mainSearch" searchClick={searchClick} />
        <MainNav
          isLogin={isLogin}
          className="mainNav"
          loginHandle={loginHandle}
        />
      </div>
      <div className="mainImg">img</div>
    </div>
  );
}

MainTop.defaultProps = {
  isLogin: false,
  searchClick: () => {},
  loginHandle: () => {},
};

MainTop.propTypes = {
  isLogin: PropTypes.bool,
  searchClick: PropTypes.func,
  loginHandle: PropTypes.func,
};
