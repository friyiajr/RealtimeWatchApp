import ExpoModulesCore

public class WatchModule: Module {
  let receiver = Receiver()
  public func definition() -> ModuleDefinition {
    Name("WatchModule")

    Events("onChange")
    
    Function("startListening") {
      receiver.registerSendEventCallback(sendEventCallback: self.sendEvent)
    }
    
    Function("disableListening") {
      receiver.disableListening()
    }
  }
}
