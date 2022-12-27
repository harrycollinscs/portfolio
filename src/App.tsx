import React from 'react'
import './App.css';
import { useState, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Resume from './components/templates/Resume';
import About from './components/templates/About';
import All from './components/templates/All';
import Projects from './components/templates/Projects';

const Body = styled.div`
`

const TabsContainer = styled.div`
  justify-content: center;
  margin: 24px;
  position: sticky;
  top: 48px;
  display: flex;
  z-index: 1000;
`

const TabButtons = styled.div`
  background: white;
  border-radius: 50px;
  display: flex;
  padding: 10px;
  overflow: auto;
`

const Tab = styled.div`
  padding: 4px;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  padding: 12px 20px;
  margin: 0 4px;
  font-size: 16px;
  letter-spacing: 0.5px;
  transition: all 0.5s ease;
  user-select: none;
  color: grey;
  ${({isActive}: {isActive: boolean}) => 
    isActive ? 
    css`
      background-color: #ede0ff;
      color: #6603fc;
    ` : 
    css`
      &:hover {
        color: black;
      }
    `
  }
  
`

const TabContent =  styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
`

interface TabManagerProps {
  tabs: {
    title: string
    component: ReactNode
  }[]
}

const Tabs = ({ tabs }: TabManagerProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div style={{flexDirection: 'column', display: 'flex', width: '100%'}}>
      <TabsContainer>
        <TabButtons>
          {tabs.map(({title}, index: number) => (
            <Tab key={index} isActive={index===activeTab} onClick={() => setActiveTab(index)}>
              {title}
            </Tab>
          ))}
        </TabButtons>
      </TabsContainer>
      <TabContent>
        {tabs[activeTab].component}
      </TabContent>
    </div>
  );
  
}

const App = () => {

  const tabs = [
    { component: <All />, title: 'All'},
    { component: <Resume />, title: 'Resume'},
    { component: <About />, title: 'About'},
    { component: <Projects />, title: 'Projects'}
  ];

  return (
    <Body>
      <Tabs tabs={tabs}/>
    </Body>
  );
}



export default App;
