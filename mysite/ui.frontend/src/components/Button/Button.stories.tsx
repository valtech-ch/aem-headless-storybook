import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Core/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BemBlock: ComponentStory<typeof Button> = (args) => <Button {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export function Primary(): JSX.Element {
  return (
    <>
      <div>
        <p>One button</p>
        <span className="cmp-button--primary">
          <BemBlock text="Search" />
        </span>
      </div>
      <div>
        <p>With very short text</p>
        <span className="cmp-button--primary">
          <BemBlock text="OK" />
        </span>
      </div>
      <div>
        <p>Two consecutive buttons in row</p>
        <div>
          <span className="cmp-button--primary">
            <BemBlock text="Search diff" />
          </span>
          <span className="cmp-button--primary">
            <BemBlock text="Search products" />
          </span>
        </div>
      </div>
      <div>
        <p>Two consecutive buttons in column</p>
        <div>
          <div className="cmp-button--primary">
            <BemBlock text="Search diff" />
          </div>
          <div className="cmp-button--primary">
            <BemBlock text="Search products" />
          </div>
        </div>
      </div>
      <div>
        <p>With link</p>
        <span className="cmp-button--primary">
          <BemBlock text="Linking to somewhere" link="https://www.valtech.com" />
        </span>
      </div>
      <div>
        <p>With long text</p>
        <span className="cmp-button--primary">
          <BemBlock
            text="A link with quite a long text"
            link="https://www.valtech.com"
          />
        </span>
      </div>
    </>
  )
}

export function Secondary(): JSX.Element {
  return (
    <span className="cmp-button--secondary">
      <BemBlock text="Search products" />
    </span>
  )
}

export function Text(): JSX.Element {
  return (
    <>
      <div>
        <p>One button</p>
        <span className="cmp-button--text">
          <BemBlock text="Search" />
        </span>
      </div>
      <div>
        <p>With very short text</p>
        <span className="cmp-button--text">
          <BemBlock text="OK" />
        </span>
      </div>
      <div>
        <p>Two consecutive buttons in row</p>
        <div>
          <span className="cmp-button--text">
            <BemBlock text="Search diff" />
          </span>
          <span className="cmp-button--text">
            <BemBlock text="Search products" />
          </span>
        </div>
      </div>
      <div>
        <p>Two consecutive buttons in column</p>
        <div>
          <div className="cmp-button--text">
            <BemBlock text="Search diff" />
          </div>
          <div className="cmp-button--text">
            <BemBlock text="Search products" />
          </div>
        </div>
      </div>
      <div>
        <p>With link</p>
        <span className="cmp-button--text">
          <BemBlock text="Linking to somewhere" link="https://www.valtech.com" />
        </span>
      </div>
      <div>
        <p>With long text</p>
        <span className="cmp-button--text">
          <BemBlock
            text="A link with quite a long text"
            link="https://www.valtech.com"
          />
        </span>
      </div>
    </>
  )
}

export function PreviewSpacing(): JSX.Element {
  return (
    <div>
      <div>
        <h2>As not last child, with more buttons in different lines</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
        <div className="cmp-button--primary">
          <BemBlock text="Read more" />
        </div>
        <div className="cmp-button--primary">
          <BemBlock text="Read more" />
        </div>
        <div className="cmp-button--primary">
          <BemBlock text="Read more" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
      </div>
      <div>
        <h2>As last child, with more buttons in different lines</h2>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
          <div className="cmp-button--primary">
            <BemBlock text="Read more" />
          </div>
          <div className="cmp-button--primary">
            <BemBlock text="Read more" />
          </div>
          <div className="cmp-button--primary">
            <BemBlock text="Read more" />
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
      </div>
      <div>
        <h2>As not last child, with more buttons in same line</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
        <span className="cmp-button--primary">
          <BemBlock text="Read more" />
        </span>
        <span className="cmp-button--primary">
          <BemBlock text="Read more" />
        </span>
        <span className="cmp-button--primary">
          <BemBlock text="Read more" />
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
      </div>
      <div>
        <h2>As last child, with more buttons in same line</h2>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
          <span className="cmp-button--primary">
            <BemBlock text="Read more" />
          </span>
          <span className="cmp-button--primary">
            <BemBlock text="Read more" />
          </span>
          <span className="cmp-button--primary">
            <BemBlock text="Read more" />
          </span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas convallis libero. Integer quis nisi viverra, consequat tellus a, ullamcorper lorem. "</p>
      </div>
    </div>
  )
}
