import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../../molecules/NavigationBar'

interface Props {
  children: React.ReactNode
}

const Template = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

const Page = ({ children }: Props) => (
  <>
    <NavigationBar />
    <Template>
      {children}
    </Template>
  </>
)

export default Page