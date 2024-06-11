---
sidebar_position: 2
---

# Integrate SDK

Let's start coding in your **iOS** project!


## Initialize and Start EdgePulse
1. Import the EdgePulse module at the top of your main App file (SwiftUI) or App Delegate (UIKit):
  ```swift title="main.swift"
import EdgePulse
  ```


2. Create a variable for EdgePulse that is accessible throughout the class:
  ```swift title="main.swift"
var edgePulse: EdgePulse
  ```


3. Initialize the EdgePulse variable in your `init` function, providing your access token:
  ```swift title="main.swift"
edgePulse = EdgePulse(accessToken: "<YOUR_ACCESS_TOKEN>")
  ```


4. Once EdgePulse is initialized, start the SDK to begin tracking:
  ```swift title="main.swift"
edgePulse.start()
  ```
