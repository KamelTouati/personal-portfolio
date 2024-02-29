// import React from 'react'

const TechStack = (props) => {
  return (
    <li key={props.tech.id} className="border border-[#222f45]">
      <img className="w-10 h-10" src={props.tech.img} alt="program_img" />
    </li>
  );
};

export default TechStack;
