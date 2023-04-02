import React from 'react'
import renderer from 'react-test-renderer'
import ImageCard from './index'
import PortfolioLight from '../../../assets/images/PortfolioLightMode.png'

const testParagraphs = [
  'I recently began this project as a means of self-development. With the goal of increasing my breadth of knowledge in the world of Software Development, I have created a Notion document containing some important topics that I believe will be helpful to learn for any Full Stack Engineer.',
  'Each topic has a variety of sub-topics/key areas to go into more detail with.',
  'The development of this resource has been both for my own learning, and for me to congregate the knowledge I already have. Thus, some content has been written by me directly, and some has been with the assistance of ChatGPT, and then reviewed before addition.'
]

it('renders correctly', () => {
  const tree = renderer.create(
    <ImageCard
      image={{
        src: PortfolioLight,
        alt: 'portfolio'
      }}
      headerLeft={<p>Test left</p>}
      headerRight={<p>Test right</p>}
      paragraphs={testParagraphs}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
