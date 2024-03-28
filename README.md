# How to make a Realtime Accelerometer app using Expo and Apple Watch

## Step 1: Run Expo Prebuild

In order to start the project you're going to need an ios project. To generate this run:

```bash
$ npx expo prebuild
```

## Step 2: Add a Watch Target to your Project

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

## Step 3: Create your Apple Watch App
