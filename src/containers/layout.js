import React, { useState, useEffect, useRef, useContext } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Footer from '../components/footer';
import '../sass/main.scss';
import Home from '../pages/home';
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguagePack from '../components/languagePack';
import { LanguageContext } from '../context';

const Layout = (props) => {
  const context = useContext(LanguageContext);
  const [contentIsVisible, setContentIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef();

  const yOffset = (event) => {
    setScrollY(event.target.scrollTop);
  };

  useEffect(() => {
    const loc = props.location.pathname;
    contentRef.current.scroll(0, 140);
    const pattern = /realisations\/\d+/;
    if (
      loc === '/contact' ||
      loc === '/trusted-me' ||
      loc === '/about-me' ||
      loc === '/offer' ||
      loc === '/realisations' ||
      pattern.test(loc)
    ) {
      openContentHandler();
    } else {
      closeContentHandler();
    }
  }, [props.location.pathname]);

  const openContentHandler = () => {
    setContentIsVisible(true);
  };

  const closeContentHandler = () => {
    setContentIsVisible(false);
  };

  const getReturnUrl = () => {
    const currentPath = window.location.pathname;
    let howManyToDelete = 0;
    for (let i = currentPath.length; i >= 1; i--) {
      if (currentPath[i] === '/') {
        break;
      }
      howManyToDelete++;
    }
    const returnUrl = currentPath.slice(
      0,
      currentPath.length - howManyToDelete
    );
    return returnUrl;
  };

  const goBack = () => {
    const returnUrl = getReturnUrl();
    if (returnUrl) {
      props.history.push(returnUrl);
    } else {
      props.history.push(returnUrl);
    }
  };

  return (
    <main>
      <div
        className={
          contentIsVisible
            ? 'main-menu main-menu--content'
            : 'main-menu'
        }
      >
        <LanguagePack />
        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              openContent={openContentHandler}
              closeContent={closeContentHandler}
              contentIsVisible={contentIsVisible}
            />
          )}
        />
      </div>
      <div
        className={
          contentIsVisible
            ? 'content-container content-container--visible'
            : 'content-container'
        }
        onScroll={yOffset}
        ref={contentRef}
      >
        <div className="content-container__back" title={context.dictionary.layout.back}>
          <div
            to="/"
            onClick={goBack}
            className="content-container__back-button"
          >
            <FontAwesomeIcon icon="arrow-left" />
          </div>
        </div>
        {props.children}
      </div>
      <Footer />
    </main>
  );
};
export default withRouter(Layout);
