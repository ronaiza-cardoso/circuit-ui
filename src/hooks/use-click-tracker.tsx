/**
 * Copyright 2020, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MouseEvent } from 'react';
import { useClickTrigger } from '@sumup/collector';
import { Dispatch } from '@sumup/collector/build/types';

export type OnClickTracker = (arg: MouseEvent<any>) => void;

export default function useClickTracker(
  onClick?: OnClickTracker,
  tracking?: Dispatch,
  defaultComponentName?: string
): OnClickTracker | undefined {
  const dispatch = useClickTrigger();
  const { label, component = defaultComponentName, customParameters } =
    tracking || {};

  return onClick && label
    ? (arg: MouseEvent<any>): void => {
        dispatch({ label, component, customParameters });

        if (onClick) {
          onClick(arg);
        }
      }
    : onClick;
}
