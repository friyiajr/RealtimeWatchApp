# How to make a Realtime Accelerometer app using Expo and Apple Watch

> [!NOTE]
> All the steps to set up the project are here. If you want to go through the steps check out the `starter` branch and follow the README.md here.

> [!WARNING]
> If you don't care about the steps and just want to try this out make sure to run `npx expo prebuild` it should setup everything for you.

## Phase 1: Run Expo Prebuild

In order to start the project you're going to need an ios project. To generate this run:

```bash
$ npx expo prebuild
```

## Phase 2: Add a Watch Target to your Project

Open your React Native project and find the `xcworkspace` in your `ios` folder.

<p align="center">
<img src="./img/step1/open.png" height="200" >
</p>

Create a new target by going to `File > Target`

<p align="center">
<img src="./img/step1/new_target.png" height="200" >
</p>

In the target screen go into `watchOS` and select app

<p align="center">
<img src="./img/step1/watch_target.png" height="300" >
</p>

On the options screen choose Watch App for Existing iOS app and choose `RealTimeWatchApp`. Name the project `SampleWatch` and press finish and press activate.

<p align="center">
<img src="./img/step1/watch_app_for_existing.png" height="300" >
</p>

## Phase 3: Create your Apple Watch App

Create a new swift file called `ViewModel.swift`. This is going to contain all of our accelerometer logic.

<p align="center">
<img src="./img/step2/new_file.png" height="300" >
</p>

<p align="center">
<img src="./img/step2/viewmodel_create.png" height="300" >
</p>

Add the following code to the ViewModel. This isn't a Swift lesson so I am not going to get into too much detail. The code comments should explain what each chunk is doing

```swift
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
```

Next go into the `ContentView.swift` file. In this file add the ViewModel to the top of the struct and a button that sends a message on press.

```swift
struct ContentView: View {
    let viewModel = ViewModel()
    var body: some View {
        VStack {
            Text("Hello, world!")
          Button("SEND", action: {
            viewModel.sendMessage()
          })
        }
        .padding()
    }
}
```

Lastly we'll need to do some configuration. Go to your project and find `Signing & Capabilities` in the top tab. Select your Apple Developer team and replace the None value. You'll have to repeat this for the watch target and the phone target

<p align="center">
<img src="./img/step2/apple_developer.png" height="300" >
</p>

Lastly change the Deployment Info to the version of apple watch that you have

<p align="center">
<img src="./img/step2/version.png" height="300" >
</p>

At this point you'll want to run the watch app and make sure it compiles. Try it out now and make sure everything works so far.

## Phase 4: Connect to the iPhone

## Phase 5: Re-Create the Expo Project using a Config Plugin
