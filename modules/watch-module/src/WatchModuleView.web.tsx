import * as React from 'react';

import { WatchModuleViewProps } from './WatchModule.types';

export default function WatchModuleView(props: WatchModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
