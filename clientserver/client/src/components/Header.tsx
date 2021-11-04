import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <SHeader>
      <div className="wrapper">
        <Link to="/">
          <div className="title">DevDev</div>
        </Link>
        <ul className="subMenu">
          <Link to="/">
            <li className="subMenuItem">Home</li>
          </Link>
          <Link to="/new-post">
            <li className="subMenuItem">글쓰기</li>
          </Link>
        </ul>
      </div>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  width: 100%;
  height: 10vh;
  ${(props) => props.theme.shadowN1};
  margin-bottom: 2rem;
  .wrapper {
    height: 100%;
    max-width: 108rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    .title {
      font-size: ${(props) => props.theme.FontSizeXXlg};
      font-weight: 700;
    }
    .subMenu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .subMenuItem {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
  .title {
    color: ${(props) => props.theme.ColorMainYellow};
  }
`;
