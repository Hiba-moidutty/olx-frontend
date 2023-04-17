import React ,{ useEffect }from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
// import SellButton from '../../assets/SellButton';
// import SellButtonPlus from '../../assets/SellButtonPlus';
import Cookies from 'js-cookie';
import { useDispatch , useSelector} from "react-redux";
import { userAction } from '../../redux/usernameSlice';
import axios from "../../utils/axios"
import { verifyToken } from '../../utils/Constants';

function Header() {

  const dispatch = useDispatch();
  const navigate =useNavigate();

  const username1 = useSelector((state)=>state.username.value);
  console.log(username1,'ooooooooiii')

  const logout=()=>{
    return dispatch(userAction.logOut());
  };
  // const username = useSelector((state)=> state.username);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>
            {username1 ? (
              <span>
                {username1}{" "}
                <button onClick={()=>{
                  logout()
                }}>Logout</button>
              </span>
            ) : (
            <button>
              <Link className="Link" to="/login">Login
              </Link>
            </button>
            )}
            </span>
          <hr />
        </div>

        <div className="sellMenu">
       
          <button  onClick={() => {
              navigate("/profile");
            }}>
              Profile
          </button>
          {/* <button  onClick={() => {
              navigate("/cart");
            }}>
              CART
          </button> */}
          </div>
        </div>
      </div>

  );
}

export default Header;

