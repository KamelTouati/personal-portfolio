const Title = (props) => {
	return (
		<>
			<div className='flex items-center w-fit rounded glass inline-block px-[15px] font-bold text-[var(--color4)] text-[20px] my-2.5'>
                {props.children}
            </div>
		</>
	)
}

export default Title