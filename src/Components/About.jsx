import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './About.css';

const About = ({ Data, handleClick }) => {
  const { id } = useParams();
  const data = Data.find((data) => data.id === parseInt(id));
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = (event) => {
    const { top, bottom, left, right } = event.target.getBoundingClientRect();

    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const clientX = event.clientX - left;
    const clientY = event.clientY - top;

    const offsetX = (clientX - middleX) / middleX;
    const offsetY = (middleY - clientY) / middleY;

    const rotateY = offsetX * -20; // Invert rotation for X-axis
    const rotateX = offsetY * -20; // Invert rotation for Y-axis

    setTransform({
      rotateX,
      rotateY,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
    });
  };

  return (
    <div className="container">
      <div className="content">
        <h3 className="title">{data.title}</h3>
        <p className="description">{data.description}</p>
        <button onClick={() => handleClick(data)} className="addTocart">
          Add cart
        </button>
      </div>
      <div className="image-container">
        <img
          className="tilt"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateY(${transform.rotateY}deg) rotateX(${transform.rotateX}deg) scale3d(1, 1, 1)`,
            overflow: 'hidden',
          }}
          src={data.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
