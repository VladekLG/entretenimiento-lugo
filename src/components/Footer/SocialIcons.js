import React from 'react'

export const SocialIcons = ({Icons}) => {
  return (
    <div className='text-teal-500'>
        {Icons.map(icon=>(
            <span key={icon.name} className='p-2 cursor-pointer'>
                <ion-icon name={icon.name}></ion-icon>
            </span>
        ))}
    </div>
  )
}
