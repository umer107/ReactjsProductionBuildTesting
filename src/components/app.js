import React, { Component } from 'react';
import $ from 'jquery';
import PopUp from './popup';
export default class App extends Component {

//getInitialState

//PopupFunction
    popupfunction=(e)=> {
      $('.popup-'+e).slideDown(400);
    }
    //popupClose

//RenderFunction
  render() {
    // Home Page scroll changes Start
var firstSection1 = $(window).height();
if (firstSection1 < 606) {
    var firstSection1 = 606;
} else if (firstSection1 > 950) {
    var firstSection1 = 950;
}
// On scroll fixed the multicolor strip on top
$(window).scroll(function () { $(window).scrollTop() > parseInt($('div.homeHeader').css('max-height')) - 6 ? $('.multiColorBorder').addClass('fixed') : $('.multiColorBorder').removeClass('fixed') });

$(window).scroll(function () {

    if ($("#row1Block").length > 0) {
        var topHT1 = parseInt($("#row1Block").offset().top) - parseInt(firstSection1 / 1.5);
        if ($(window).scrollTop() > parseInt(topHT1)) {
            $('.homeRow1Left').addClass('fade-In-top');
            $('.homeRow1Right').addClass('fade-In-Right');

        }
        var topHT2 = parseInt($("#row2Block").offset().top) - parseInt(firstSection1 / 1.5);
        if ($(window).scrollTop() > parseInt(topHT2)) {
            $('.homeRow2Left').addClass('fade-In-Left');
            $('.homeRow2Right').addClass('fade-In-Right');
        }
    }
});
var style =
{
   display: "none"
}
//dropdown
// Search Dropdown Start

// dropdown
$(document).on('click','.selected-text',function(){
    var el = $(this);
    var getObject = el.closest('li').next('li').find('ul.dropdownOptions');
    if(getObject.is(':hidden'))
    {
        getObject.slideToggle(250);
        el.closest('.dropdown').addClass('noradius');
    }
    else
    {
        getObject.slideToggle(150);
        setTimeout(function(){
          el.closest('.dropdown').removeClass('noradius');
        }, 300);
    }

});

// close dropdown on outside click
$(document).on('click', function(event){
    var container = $(".dropdown");
    if (!container.is(event.target) &&
        container.has(event.target).length === 0)
        {
            if($('ul.dropdown').find('ul.dropdownOptions').is(':visible'))
            {$('ul.dropdown').find('ul.dropdownOptions').slideUp(150);}

        }
});

// Select dropdown value
$(document).on('click','ul.dropdownOptions li',function(){
    var getValue = $(this).find('a').attr('value');
    $('a.selected-text span').html(getValue);
    $('ul.dropdown').find('ul.dropdownOptions').slideToggle(150);
});


// Search Dropdown End


// Home Page scroll changes End
    return (

  <div>
  <div className="row home-header">

<div className="header-container">

<div className="home-logo absolute">
  <a href="javascript:;">
    <img src="../images/homeLogo.png" />
  </a>
</div>

<div className="home-signup absolute">
  <a href="javascript:;" onClick={(e) => this.popupfunction('login')} className="v-a-m d-t-c align-center"> Sign in / Sign up </a>
</div>

<div className="home-options clr-white auto-margin align-center">
  <p className="fs-50">Download <span className="fw-500">followit</span></p>
  <p className="fs-19 half-pad-top">and let your new home find you</p>
  <p className="four-pad-top">
    <a href="javascript:;"><img src="../images/home-google-play-icon.png" /></a>
    <a href="javascript:;"><img src="../images/home-app-store-icon.png" /></a>
  </p>

  <div className="full">
    <div className="home-search fs-13 fw-500 lt-44 auto-margin">
      <ul className="dropdown bg-white d-i-b pull-left relative wd-106 left-radius">
        <li>
          <a href="javascript:;" className="selected-text d-b"><span className="d-i-b">Buy </span><i className="icon-drop-Arrow fs-6 pull-right d-i-b double-pad-right" ></i></a>
        </li>
                    <li>
                        <ul className="dropdownOptions bg-white absolute full-width" style={style}>
                            <li><a href="javascript:;" value="Buy">Buy</a></li>
                            <li><a href="javascript:;" value="Rent" >Rent</a></li>
                            <li><a href="javascript:;" value="Sold" >Sold</a></li>
                            <li><a href="javascript:;" value="Agents" >Agents</a></li>
                        </ul>
                    </li>
      </ul>
      <input type="text" className="ht-44 pull-left fw-500" id="autocomplete" placeholder="Where would you like to live?"/>
      <a href="javascript:;" className="bg-white d-i-b pull-left click-search d-b right-radius"><i className="icon-search fs-13"></i></a>
    </div>
  </div>

  <a href="javascript:;" className="clr-white followit-works d-i-b">see how followit works</a>

</div>
</div>

</div>

<div className="full multiColorBorder"></div>

<div className="relative full">
<div className="full homeRow1 overflow-hidden" id="row1Block">

    <div className="containerHome">
        <div className="homeRow1Right">

            <h2 className="color-blue fs-36 triple-pad-top">You can follow just about <br/> anything and get updates live <br/> as the market evolves</h2>
            <p className="four-pad-top">Find out about new listings, price updates, coming soon, auction updates, open for inspections, contract exchanges and sold properties in the area and at the price point that is relevant to you!</p>
            <p className="four-pad-top fs-20">If you want the latest information so you can make <br/> better property decisions, <span className="color-blue">just followit!</span></p>

        </div>

        <div className="homeRow1Left">
          <img src="../images/home-mobile1.png" />
        </div>

    </div>

</div>
</div>
<div className="full  bg-white  overflow-hidden" id="row2Block">
<div className="containerHome">
    <div className="containerIMG">

        <div className="homeRow2Right  mobileImg align-right pad-top">
    <img src="../images/home-mobile2.png" />
        </div>

        <div className="homeRow2Left">
            <h2 className="color-blue fs-36">Get our mobile app and enjoy followit on the go</h2>
            <p className="triple-pad-top">Following properties on the go has never been easier! Our new app is compatible with iPad / iPhone devices so you can take it anywhere you go</p>
            <h3 className="color-blue four-pad-top fs-21">Available now for</h3>
            <span>
                <a className="" href="https://play.google.com/store/apps/details?id=com.followit.publicapp" target="_blank">
                    <img src="../images/home-google-play-icon.png" />
                </a>
                <a className="triple-pad-left" href="https://itunes.apple.com/au/app/followit-real-estate/id1037952933?mt=8" target="_blank">
                    <img src="../images/home-app-store-icon.png" />
                </a>
            </span>
        </div>

    </div>

</div>
</div>
<PopUp />
  </div>




    );
  }
}
