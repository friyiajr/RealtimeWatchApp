import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { WatchModuleViewProps } from './WatchModule.types';

const NativeView: React.ComponentType<WatchModuleViewProps> =
  requireNativeViewManager('WatchModule');

export default function WatchModuleView(props: WatchModuleViewProps) {
  return <NativeView {...props} />;
}
