import React, { ReactElement, ReactNode } from 'react'
import styled, { withTheme } from 'styled-components'

interface Props {
  image: { src: string, alt: string }
  headerLeft: ReactElement
  headerRight: ReactElement
  title?: ReactElement
  paragraphs: string[]
  isList?: boolean
  link?: string
  useDropdown?: boolean
  theme?: any 
}

const Card = styled.div`
  position: relative;
  align-content: center;
  background-color: ${({ theme }) => 'rgb(255, 255, 255, 0.5)'};
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f8f8f8;


  img {
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    overflow: hidden; 

    @media screen and (max-width: 700px) {
      border-radius: 0;
    }
  }

  div {
    padding: 12px 24px 0px 24px;
  }

  button {
    border: 0;
    margin: 20px 20px;
    padding: 10px 20px;
    background-color:  ${({ theme }) => theme.accentBackground};
    color: ${({ theme }) => theme.accentText};
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  details {
    summary {
      display: flex;
      justify-content: space-between;
      margin: 24px;
      padding: 0px 24px;
      background-color:  ${({ theme }) => theme.secondary};
      border-radius: 20px;
      &:before {
        content: 'Details';
      }
      &:after {
        content: '▼';
      }
    }
  }

  details[open] {
    summary {
      &:after {
        content: '▲';
      }
    }
  }

  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`

const List = (paras: string[]) => (
  <ul style={{ textAlign: 'left' }}>
    {paras.map(para => <li>{para}</li>)}
  </ul>
)

const Paragraphs = (paras: string[]) => (
  <>
  {paras.map((para: string) => (
        <p>{para}</p>
      ))}
  </>
)

const Dropdown = (children: ReactNode) => (
  <details>
    <summary></summary>
    { children }
  </details>
)


const ImageCard = ({ image, headerLeft, headerRight, title, paragraphs, isList, link, useDropdown = false, theme }: Props) => {
  
  return (
    <Card>
      <img src={image.src} alt={image.alt}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center', marginBottom: 0 }}>
        {headerLeft}
        {headerRight}
      </div>
      <div>

      {!!title && title}

      {
        useDropdown ? Dropdown(isList ? List(paragraphs) : Paragraphs(paragraphs)) : isList ? List(paragraphs) : Paragraphs(paragraphs)
      }

      {
        !!link && (
          <div style={{ width: '100%', height: '40px' }}>
            <a href={link} target="_blank" rel="noreferrer">
              <button>See more</button>
            </a>
          </div>
        )
      }
      </div>
    </Card>
  )
}

export default withTheme(ImageCard)