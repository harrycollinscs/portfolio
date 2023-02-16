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
  position: sticky;
  top: 0px;
  display: flex;
  z-index: 1000;
  padding: 10px;
  box-shadow: 0rem 0.1rem 0.3rem rgba(0,0,0,0.1);
  background-color: white;
`

const Tab = styled.div`
  padding: 4px;
  border-radius: 8px;
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

const TabContent = styled.div`
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
          {tabs.map(({title}, index: number) => (
            <Tab key={index} isActive={index===activeTab} onClick={() => setActiveTab(index)}>
              {title}
            </Tab>
          ))}
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
