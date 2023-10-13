import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// .svg -> Shape #eccf7e, Trace Color #CCCCCC, BG Padding 25%, size 200px, padding 35%

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/facil-de-usar.svg').default,
    description: (
      <>
        Los sitios web desarrollados Lumau fueron diseñados para realizar
        cambios en los textos, imágenes, enlaces, creación de contenido (blog)
        de forma intuitiva.
      </>
    ),
  },
  {
    title: 'Centrado en lo importante',
    Svg: require('@site/static/img/centrado-importante.svg').default,
    description: (
      <>
        Lumau permite concentrarte en el contenido, nosotros implementamos los
        cambios. Crea contenido maravilloso para tus visitantes.
      </>
    ),
  },
  {
    title: 'Posicionamiento en buscadores',
    Svg: require('@site/static/img/posicionamiento.svg').default,
    description: (
      <>
        Mantener el contenido fresco puede ayudarte a mejorar tu posición en los
        resultados de búsqueda, lo que significa más visibilidad y tráfico
        orgánico.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
