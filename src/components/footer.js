import React , {Component}  from 'react';
import ReactDOM from 'react-dom';

class Footer  extends Component
{

render()
{
  return(

    <footer className="row bg-blue align-center fifty-pad-top  fifty-pad-bottom">
        <div className="row double-gap-bottom half-pad-bottom">
            <a href="javascript:;">Agency login</a>
            <i className="bordered"></i>
            <a href="javascript:;">Press</a>
            <i className="bordered"></i>
            <a href="javascript:;">Partners</a>
            <i className="bordered"></i>
            <a href="javascript:;">About us</a>
            <i className="bordered"></i>
            <a href="javascript:;">Privacy Policy</a>
            <i className="bordered"></i>
            <a href="javascript:;">Terms & Conditions</a>
            <i className="bordered"></i>
            <a href="javascript:;">Contact us</a>
        </div>
        <p className="row clr-white">Copyright © 2017 followit</p>
    </footer>


  );
}

}

export default Footer;
