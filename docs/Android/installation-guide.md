---
sidebar_position: 1
---

# Installation Guide

A quickstart guide to get started with **EdgePulse on Android**

## Prerequisites
- Android Studio installed on your development machine
- **minimal** Android development experience
- An EdgePulse account with an access token
- A project with a minimum deployment target of Android 10 (API level 29)

## Add EdgePulse to Your Gradle File
1. Open your Android project in Android Studio.
2. Navigate to the **app** module's **build.gradle** file.
3. Add the following implementation line to the dependencies section:
   ```kotlin title="build.gradle"
   implementation("com.edge.pulse:1.x.x")
   ```
4. Sync your project to apply the changes.

## Set Required Permissions
1. Open the **AndroidManifest.xml** file for your project.
2. Add the following permissions:
    ```xml title="AndroidManifest.xml"
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    ```
