---
sidebar_position: 2
---

# Integrate SDK

Let's start coding in your **Android** project!

## Initialize and Start EdgePulse
1. Import the EdgePulse module at the top of your main file:
    ```swift title="main.kt"
   import com.edge.pulse.EdgePulse
    ```
2. Create a variable for EdgePulse that is accessible throughout the class:
    ```swift title="main.kt"
   lateinit var edgePulse: EdgePulse
   ```
3. Initialize EdgePulse in your `onCreate` or `init` function, providing the application context and your access token:
    ```swift title="main.kt"
   edgePulse = EdgePulse(context, "<YOUR_ACCESS_TOKEN>")
    ```
4. Before starting EdgePulse, request the necessary location permissions from the user programmatically. For example:
    ```swift title="main.kt"
   val permissions = arrayOf(
       android.Manifest.permission.ACCESS_FINE_LOCATION,
       android.Manifest.permission.ACCESS_COARSE_LOCATION,
       android.Manifest.permission.ACCESS_BACKGROUND_LOCATION
   )
   ActivityCompat.requestPermissions(this, permissions, REQUEST_CODE_LOCATION)
   ``

5. Once EdgePulse is initialized and permissions are granted, start the SDK tracking:
    ```swift title="main.kt"
   edgePulse.start()
   ```
