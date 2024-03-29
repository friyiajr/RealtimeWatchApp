import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

import WatchModule from "./src/WatchModule";

import {
  ChangeEventPayload,
  WatchModuleViewProps,
} from "./src/WatchModule.types";

export function startListening() {
  WatchModule.startListening();
}

export function disableListening() {
  WatchModule.disableListening();
}

const emitter = new EventEmitter(WatchModule ?? NativeModulesProxy.WatchModule);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export function removeListener() {
  emitter.removeAllListeners("onChange");
}

export { WatchModuleViewProps, ChangeEventPayload };
