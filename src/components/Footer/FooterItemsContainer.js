import React from 'react'
import { FooterItem } from './FooterItem'
import {PRODUCTS,RESOURCES,COMPANY,SUPPORT,Icons} from './Menus'
export const FooterItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
        <FooterItem Links={PRODUCTS} title='PRODUCTS'/>
        <FooterItem Links={RESOURCES} title='RESOURCES'/>
        <FooterItem Links={COMPANY} title='COMPANY'/>
        <FooterItem Links={SUPPORT} title='SUPPORT'/>
    </div>
  )
}
