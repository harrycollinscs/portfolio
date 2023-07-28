import React, { useState } from 'react'
import styled from 'styled-components'
import NavigationBar from '../../molecules/NavigationBar'
import Footer from '../../organisms/Footer'
import Button from '../Button'

interface Props {
  children: React.ReactNode
  hideFooter?: boolean
}

const Template = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Page = ({ children, hideFooter = false }: Props) => {
  const [showScrollUpButton, setShowScrollUpButton] = useState(false)

  window.onscroll = () => {
    setShowScrollUpButton(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
  };

  return (
    <>
      <NavigationBar />
      <Template>
        {children}
      </Template>
      {!hideFooter && <Footer />}
      {showScrollUpButton && (
        <div style={{position: 'fixed', right: 40, bottom: 40}}>
          <Button text='▲' onClick={scrollToTop}/>
        </div>
        )}
    </>
  )
}

export default Page