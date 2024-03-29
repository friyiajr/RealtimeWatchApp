//
//  Receiver.swift
//  ClientApp
//
//  Created by Daniel Friyia on 2024-03-24.
//

import Foundation
import WatchConnectivity

typealias SendEventType = (_ eventName: String, _ body: [String: Any?]) -> Void

class Receiver: NSObject, WCSessionDelegate {
  
  var sendEventCallback: SendEventType? = nil
  var isListening = true;
  
  override init() {
    super.init()
    WCSession.default.delegate = self
    WCSession.default.activate()
  }
  
  func registerSendEventCallback(sendEventCallback: @escaping SendEventType) {
    isListening = true
    self.sendEventCallback = sendEventCallback
  }
  
  func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
    print(message)
  }
  
  func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
    if(isListening) {
      self.sendEventCallback?("onChange", message)
    }
  }
  
  func disableListening() {
    isListening = false;
  }

  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
    
  }
  
  func sessionDidBecomeInactive(_ session: WCSession) {
    
  }
  
  func sessionDidDeactivate(_ session: WCSession) {
    
  }
  
  
}
