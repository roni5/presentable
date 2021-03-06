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

import { Component } from 'react'

/**
 * Set a getter with the default view on the target component.
 */
export function defaultView(defaultView:Component<*>) {
  return (targetComponent:Component<*>) => {
    let prototype = targetComponent.prototype
    Object.defineProperty(prototype, 'defaultView', {
      get() {
        return defaultView
      }
    })
    return targetComponent
  }
}

export default defaultView
