import React from 'react';
// import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="text-mode bg-mode">
      <div className="container py-24 mx-auto text-center">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="paragraph-mode hero__subtitle">{siteConfig.tagline}</p>
        <div className="py-10">
          <Link
            className="btn-primary"
            to="/docs/intro"
          >
            Comenzar Tutorial!
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Hero;
