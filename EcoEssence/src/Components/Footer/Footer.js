import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import Avatar from "@material-ui/core/Avatar";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: 10,
          borderTop: "1px solid lightgray",
          height: 100,
          backgroundColor: "#43A047",
          justifyContent: "space-around",
          display: "flex"
        }}
      >
        <div>
          <div
            style={{ color: "#FAFAFA", fontWeight: "bold", marginBottom: 10 }} //footer topics
          >
            Buy
          </div>
          <NavLink
            to={"/payment"}
            exact
            style={{
              textDecoration: "none",
              color: "#e0e0e0"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Terms of payment</div>
          </NavLink>
          <NavLink
            to={"/delivery"}
            exact
            style={{
              textDecoration: "none",
              color: "#e0e0e0"
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Delivery</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#FAFAFA", fontWeight: "bold", marginBottom: 10 }}
          >
            About us
          </div>
          <NavLink
            to={"/info"}
            exact
            style={{
              textDecoration: "none",
              color: "#e0e0e0"
            }}
            activeStyle={{
              color: "#4282ad"
              // textDecoration: "underline"
            }}
          >
            <div className="footerItem">Company Info</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{
              color: "#FAFAFA",
              // fontsize: "lg",
              fontWeight: "bold",
              marginBottom: 10
            }}
          >
            {/* <Avatar>H</Avatar> */}
            Social Media
          </div>
          <a
            href="http://www.facebook.com"
            target="blank"
            style={{
              textDecoration: "none",
              color: "#e0e0e0"
            }}
          >
            <div className="footerItem">Facebook</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
