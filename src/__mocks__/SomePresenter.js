// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import React, { Component } from 'react'
import SharedComponent from './SharedComponent'
import {
  ALMOST_HANDLERS,
  NORMAL_HANDLERS,
  NORMAL_PROPS,
  SINGLE_CHAR_HANDLERS,
  SINGLE_CHAR_PROPS,
  STATE
} from './constants'

export class SomePresenter extends Component {
  render() {
    expect(this.props.presentable)
      .not.toBeUndefined()

    let { instance, state, props, handlers } = this.props.presentable

    expect(instance)
      .toBeInstanceOf(SharedComponent)

    expect(state)
      .toEqual(STATE)

    expect(props)
      .toEqual({
        ...ALMOST_HANDLERS,
        ...SINGLE_CHAR_PROPS,
        ...NORMAL_PROPS
      })

    expect(handlers)
      .toEqual({
        ...SINGLE_CHAR_HANDLERS,
        ...NORMAL_HANDLERS
      })

    return <div>Ctrine!</div>
  }
}

export default SomePresenter