import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI Chatbot',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Delve into creating an AI chatbot using KerasNLP and TensorFlow, exploring natural language processing and deep learning. 
      </>
    ),
  },
  {
    title: 'FastAPI',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        FastAPI is a high-performance web framework for building APIs with Python 3.8+. Learn how to create robust APIs quickly using Python type hints and automatic interactive documentation.
      </>
    ),
  },
  {
    title: 'Flutter',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>Flutter will enable you to create native mobile apps for both iOS and Android using a single codebase. When combined with Firebase, it provides a powerful backend-as-a-service platform.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
