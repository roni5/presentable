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

import isPresentable from './isPresentable'
import { Component } from 'react'

export function resolveView(target:Component<*>) {
  if (!isPresentable(target))
    return undefined

  const VIEW = target?.props?.view
  if (VIEW && VIEW.prototype instanceof Component)
    return VIEW

  const CONTEXT_VIEW = target?.context?.view
  if (CONTEXT_VIEW && CONTEXT_VIEW.prototype instanceof Component)
    return CONTEXT_VIEW

  const DEFAULT_VIEW = target?.defaultView
  if (DEFAULT_VIEW && DEFAULT_VIEW.prototype instanceof Component)
    return DEFAULT_VIEW

  return undefined
}

export default resolveView
