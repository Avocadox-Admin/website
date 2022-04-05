import React, { useRef, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Slider = () => {
  const { slider } = useStaticQuery(graphql`
    query {
      slider: allFile(filter: { relativeDirectory: { eq: "images/slider" } }) {
        edges {
          node {
            childImageSharp {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>();

  useEffect(() => {
    sliderRef.current!.addEventListener('animationend', removeAnimation);
    // startSlider();
    // return () => {
    //   pauseInterval();
    // };
  }, []);

  const removeAnimation = () => {
    sliderRef.current!.classList.remove('fade-anim');
  };

  const imageData = slider.edges[currentIndex].node.childImageSharp.gatsbyImageData;

  const handleClick = (index: number) => {
    if (index === currentIndex) {
      return;
    }
    setCurrentIndex(index);
    sliderRef.current!.classList.add('fade-anim');
  };

  return (
    <div ref={sliderRef} className="w-full flex justify-center bg-black text-white mb-12">
      <div className="max-w-screen-xl relative">
        <GatsbyImage image={imageData} alt="soem" />
        <div className="absolute top-[85%] left-[50%] flex gap-4">
          {slider.edges.map((item, index) => (
            <button
              key={item.node.childImageSharp.id}
              className="b-none bg-white/60 w-4 h-4 rounded-full"
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
