import React, { Component } from "react";
import { NavWrapper, IconWrapper } from "./navbar/Nav-style";

export default class README extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <IconWrapper className="pr-3">
            <span>
              <i className="fas fa-beer" />
            </span>
          </IconWrapper>
          <h2 className="navbar-nav text-main-title">Beer Market</h2>
        </NavWrapper>
        <div className="container mx-auto text-center">
          <h1 className="text-main-title text-center py-4"> README Page  - edited. nothing to read</h1>
          </div>
          
      </React.Fragment>
    );
  }
}
