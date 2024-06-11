---
sidebar_position: 1
---

# Installation Guide

A quickstart guide to get started with **EdgePulse on iOS**

## Prerequisites
- Xcode installed on your development machine
- **minimal** iOS development experience
- An EdgePulse account with an access token
- A project with a minimum deployment target of iOS 16

## Add EdgePulse to Your Xcode Project
1. Open your project in Xcode.
2. Navigate to **File** > **Add Packages**
3. Paste the following URL into the search bar: 
```
https://github.com/edgepulseio/edgepulse-ios
```

4. Select the package and click **Add Package**
5. Follow the prompts to integrate the package into your project

## Set Background Modes and Permissions
1. Open your Xcode project and navigate to your target's **Info** tab.
2. Add the following entries under **Required background modes**:
   - Item 0: **App registers for location updates**
3. Set the necessary location permissions by adding the following to the `Info.plist` file:
   - **Privacy - Location Always Usage Description** `Allow to track your location in the background`
   - **Privacy - Location When In Use Usage Description** `Allow to track your location`
4. Add the capability for accessing Wi-Fi information:
   - Navigate to your target's **Capabilities** tab.
   - Enable **Access Wi-Fi Information**.
