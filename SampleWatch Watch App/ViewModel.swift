import Foundation
import WatchConnectivity
import CoreMotion

class ViewModel: NSObject, WCSessionDelegate {
  let manager = CMMotionManager()

  override init() {
    super.init()
    // Make this class the delegate for accelerometer updates
    WCSession.default.delegate = self

    // Start the watch session so you can communicate with the iPhone
    WCSession.default.activate()
  }

  func sendMessage() {
    if manager.isAccelerometerAvailable {
       // Change the speed of the updates
       manager.accelerometerUpdateInterval = 0.1

      // Every time a new update comes in send a message to the iPhone app
      manager.startAccelerometerUpdates(to: .main, withHandler:  { data, other  in
        let x = data?.acceleration.x ?? 0
        let y = data?.acceleration.y ?? 0
        let z = data?.acceleration.z ?? 0

        WCSession.default.sendMessage(
          ["x": "\(x)", "y": "\(y)", "z": "\(z)"],
          replyHandler: { _ in
            print("HELLo")
          })
      })
    }
  }

  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {}
}
