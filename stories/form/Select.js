import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Root from '../../packages/root/index'
import Icon from '../../packages/icon/index'
import Switch from '../../packages/switch/index'
import Button from '../../packages/button/index'

import {
  FormLabel, FormEntry,
  Input, PanelInput,
  Textarea,
  InputNumber,
  Radio, Check,
  RadioGroup, CheckGroup,
  Select, SelectNumber,
} from '../../packages/form/index'

export default class SelectExample extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = { isSmall: false }
  }

  toggleSize = () => this.setState({ isSmall: !this.state.isSmall })

  render() {
    const { isSmall } = this.state
    const size = isSmall ? 'small' : 'regular'

    return (
      <Root>
        <style>
        {`
          .toggle-size { position: fixed; top: 1em; right: 1em; }

          .Select > button .icon,
          .select-menu-with-icons .icon {
            margin-right: .25em;
            font-size: 1.2em;
            vertical-align: -.1em;
          }

          p .Select {
            margin-right: 1em;
            margin-bottom: .5em;
          }
        `}
        </style>

        <Button type="primary" onClick={this.toggleSize} className="toggle-size">
          Toggle Size
        </Button>

        <h2>Select with empty option list</h2>
        <p>
          <Select size={size} optionList={[]} />
          <Select size={size} isDisabled={false} optionList={[]} />
          <br />
          <Select size={size} isDisabled={true} optionList={[]} />
          <Select size={size} isDisabled optionList={[]} />
        </p>

        <h2>Regular node options</h2>
        <p>
          <Select size={size} shouldMenuAlignCenter placeholder="Long long long placeholder" optionList={['Apple', 'Pencil']} onChange={action('Select changed')} />
          <br />
          <Select size={size} optionList={['Apple', 'Pencil']} onChange={action('Select changed')} />
          <br />
          <Select size={size} optionList={['Apple', 'Pencil']} currentOptionIdx="0" onChange={action('Select changed')} />
          <br />
          <Select size={size} optionList={['Apple', 'Pencil']}  currentOptionIdx={0} onChange={action('Select changed')} />
          <br />
          <Select size={size} optionList={['Apple', 'Pencil', <span><Icon name="apple" /> Apple</span>]} currentOptionIdx={1} onChange={action('Select changed')} />
          <br />
          <Select size={size} optionList={['Apple', 'Pencil']} isDisabled={true} onChange={action('Select changed')} />
        </p>

        <p>
          <Select
            size={size}
            menuClassName="select-menu-with-icons"
            optionList={[
              <span><Icon name="apple" /> Apple</span>,
              <span><Icon name="pencil" /> Pencil</span>,
            ]}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            menuClassName="select-menu-with-icons"
            optionList={[
              <span>Apple</span>,
              <span>Pencil</span>,
              <span><Icon name="apple" /> Apple</span>,
              <span><Icon name="pencil" /> Pencil</span>,
            ]}
            currentOptionIdx={0}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            menuClassName="select-menu-with-icons"
            optionList={[
              <span><Icon name="apple" /> Apple</span>,
              <span><Icon name="pencil" /> Pencil</span>,
            ]}
            currentOptionIdx="1"
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            menuClassName="select-menu-with-icons"
            optionList={[
              <span><Icon name="apple" /> Apple</span>,
              <span><Icon name="pencil" /> Pencil</span>,
            ]}
            currentOptionIdx="1"
            isDisabled={true}
            onChange={action('Select changed')}
          />
        </p>

        <h3>Disabled option</h3>
        <p>
          <Select size={size} optionList={[{ label: 'Apple', value: 'apple', isDisabled: true }, 'Pencil']} onChange={action('Select changed')} />
        </p>

        <h2>Long lists (10+ options)</h2>
        <p>
          <Select
            size={size}
            optionList={['Yirgacheffe', 'Harrar', 'Kenya AA', 'Antiqua Flora', 'Huehuetenango', 'Tanzania AA', 'Cerrado', 'Bucaramanga Supremo', 'Tarrazu', 'Hawaii Kona', 'Blue Mountain', 'Mandheling']}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            currentOptionIdx="5"
            optionList={['Yirgacheffe', 'Harrar', 'Kenya AA', 'Antiqua Flora', 'Huehuetenango', 'Tanzania AA', 'Cerrado', 'Bucaramanga Supremo', 'Tarrazu', 'Hawaii Kona', 'Blue Mountain', 'Mandheling']}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            isDisabled={false}
            currentOptionIdx={10}
            optionList={['Yirgacheffe', 'Harrar', 'Kenya AA', 'Antiqua Flora', 'Huehuetenango', 'Tanzania AA', 'Cerrado', 'Bucaramanga Supremo', 'Tarrazu', 'Hawaii Kona', 'Blue Mountain', 'Mandheling']}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            isDisabled
            optionList={['Yirgacheffe', 'Harrar', 'Kenya AA', 'Antiqua Flora', 'Huehuetenango', 'Tanzania AA', 'Cerrado', 'Bucaramanga Supremo', 'Tarrazu', 'Hawaii Kona', 'Blue Mountain', 'Mandheling']}
            onChange={action('Select changed')}
          />
        </p>

        <h2>Selects of grouped options</h2>
        <p>
          <Select
            size={size}
            optionList={[
              ['Fruit', 'Apples', 'Blackberries', 'Blueberries', 'Bananas', 'Pitayas', 'Mangos'],
              ['Cheese', 'Blue Cheese', 'Parmesan', 'Ricotta', 'Benedictine', 'Brie', { label: 'Cheddar', value: 'cheddar' }, { label: 'Cream Cheese', isDisabled: true }],
              'Rib eye Steak', 'Bacon Sandwich', 'Caesar Salad',
            ]}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            currentOptionIdx="0.2"
            optionList={[
              ['Fruit', 'Apples', 'Blackberries', 'Blueberries', 'Bananas', 'Pitayas', 'Mangos'],
              ['Cheese', 'Blue Cheese', 'Parmesan', 'Ricotta', 'Benedictine', 'Brie', { label: 'Cheddar', value: 'cheddar' }, { label: 'Cream Cheese', isDisabled: true }],
              'Rib eye Steak', 'Bacon Sandwich', 'Caesar Salad',
            ]}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            currentOptionIdx="1.5"
            optionList={[
              ['Fruit', 'Apples', 'Blackberries', 'Blueberries', 'Bananas', 'Pitayas', 'Mangos'],
              ['Cheese', 'Blue Cheese', 'Parmesan', 'Ricotta', 'Benedictine', 'Brie', { label: 'Cheddar', value: 'cheddar' }, { label: 'Cream Cheese', isDisabled: true }],
              'Rib eye Steak', 'Bacon Sandwich', 'Caesar Salad',
            ]}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            currentOptionIdx="2"
            optionList={[
              ['Fruit', 'Apples', 'Blackberries', 'Blueberries', 'Bananas', 'Pitayas', 'Mangos'],
              ['Cheese', 'Blue Cheese', 'Parmesan', 'Ricotta', 'Benedictine', 'Brie', { label: 'Cheddar', value: 'cheddar' }, { label: 'Cream Cheese', isDisabled: true }],
              'Rib eye Steak', 'Bacon Sandwich', 'Caesar Salad',
            ]}
            onChange={action('Select changed')}
          />
          <br />
          <Select
            size={size}
            isDisabled
            optionList={[
              ['Fruit', 'Apples', 'Blackberries', 'Blueberries', 'Bananas', 'Pitayas', 'Mangos'],
              ['Cheese', 'Blue Cheese', 'Parmesan', 'Ricotta', 'Benedictine', 'Brie', { label: 'Cheddar', value: 'cheddar' }, { label: 'Cream Cheese', isDisabled: true }],
              'Rib eye Steak', 'Bacon Sandwich', 'Caesar Salad',
            ]}
            onChange={action('Select changed')}
          />
        </p>

        <h2>Longer options</h2>
        <p style={{ maxWidth: '20em' }}>
          <Select
            size={size}
            placeholder="选择一个项目"
            optionList={[
              ['我的项目', '私ノ友達', '双十一的特价活动超强報价页面，十月底最终版'],
              ['洋基队', 'InstaYankies', 'New York New York', 'Manhattan Project'],
              ['巨人队', 'Taller Men', 'Shorter Giants'],
              ['红襪队', '一个很長很長又臭又長很長很長又臭又長很長很長又臭又長又長又臭又長又臭又臭又長的项目名字'],
              ['队名為什麼要取得那麼地長啊，好奇怪啊，你們！队', '一个很長很長又臭又長很長很長又臭又長很長很長又臭又長又長又臭又長又臭又臭又長的项目名字'],
            ]}
          />
        </p>
      </Root>
    )
  }
}
