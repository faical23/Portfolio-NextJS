import React, { useRef, useEffect,useState } from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";




const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();

  const NAV__LINK = [
    {
      path: "/",
      display:  props.Lang.Lang == "Fr" ?   Fr.header.home : En.header.home,
    },
    {
      path: "#about",
      display:  props.Lang.Lang == "Fr" ?  Fr.header.about : En.header.about   ,
    },
    {
      path: "#services",
      display:  props.Lang.Lang == "Fr" ?   Fr.header.services : En.header.services,
    },
    {
      path: "#portfolio",
      display:  props.Lang.Lang == "Fr" ? Fr.header.portfolio : En.header.portfolio   ,
    },
    {
      path: "#contact",
      display:  props.Lang.Lang == "Fr" ?  Fr.header.contact : En.header.contact   ,
    },
  ];

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>{props.Lang.Lang == "Fr"  ?  Fr.Footer.createdBy : En.Footer.createdBy }{" "} Faical bahsis</h6>
            </div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                {props.Lang.Lang == "Fr"  ? Fr.Footer.CopyRight : En.Footer.CopyRight }
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const GetState = (state) =>{
  return {
      Lang:state
  }
}

export default connect(GetState)(Footer)
