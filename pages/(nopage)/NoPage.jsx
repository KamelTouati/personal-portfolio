import React from 'react'
import imgError from 'public/assets/images/oops.svg'
import { Title } from "../../components";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 mx-auto mt-[100px]">
			<Title>Page not found</Title>
      <img className="w-2/3" src={imgError} alt="" />
    </div>
  )
}

export default NoPage