import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../Img/avatar.png';
import { signout } from '../../utils/Icons';  // Make sure this icon exists in your project
import { menuItems } from '../../utils/menuitems';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection

function Navigation({ active, setActive }) {
  const navigate = useNavigate();  // Initialize navigate for redirection

  // Define the handleSignOut function
  const handleSignOut = () => {
    // Remove token and any user info from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>SunilDonka</h2>
          <p>Your Dashboard</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>

      {/* Sign out button */}
      <div className="bottom-nav">
        <ul>
          <li>
            <button
              onClick={handleSignOut}
              style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'inherit' }}
            >
              {signout} Sign Out
            </button>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #FFFFFF;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
