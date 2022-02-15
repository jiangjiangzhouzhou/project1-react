import React from "react";
import styles from './Nav.module.css'
import NavItem from "./components/NavItem";
import Row from 'react-bootstrap/Row';
import {Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const PAGES = [
    {
      link:'#header',
      style:styles.logo,
      page:'LOGO',
    }, {
      link:'#profile',
      style:'',
      page:'Home',
    }, {
      link:'#about',
      style:'',
      page:'About',
    }, {
      link:'#skills',
      style:'',
      page:'Skills',
    }, {
      link:'#projects',
      style: '',
      page:'Projects',
    }, {
      link:'#contact',
      style:'',
      page:'Contact',
    }, {
      link:'#header',
      style:styles.lang,
      page:'EN',
    }
];

const Nav = () => (
    <header id='header'>
      <Container>
        <Row>
          {PAGES.map(({
            link,
            style,
            page,
          }) => (
            <Col>
              <NavItem link= {link} style={style || styles.nav__item} page={page} />
            </Col>
          ))}
        </Row>
      </Container>
    </header>
)

export default Nav