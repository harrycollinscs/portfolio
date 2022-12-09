import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  const Template = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  `

  return (
    <Template>
      {children}
    </Template>
  )
}

export default Page