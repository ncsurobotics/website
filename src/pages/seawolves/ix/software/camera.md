---
title: Stereo Depth Camera
sort: 3
---

{% svg "misc/ZED_X_Mini_Expo", null, "sponsor-logo"%}

SeaWolf IX's new stereo depth camera, the ZED X Mini, provides high accuracy depth data. This is allows us to know how far away objects are spatially, rather than relying on their relative size in the camera's frame to estimate their distance (as we did with SeaWolf VIII's single front camera). 

Beyond raw depth sensing, the camera facilitates highly accurate global localization through Visual Simultaneous Localization and Mapping (VSLAM) and Visual-Inertial Odometry (VIO). VSLAM uses the camera's stereo vision (depth and RGB pointclouds) to map the environment while simultaneously tracking the robot's position within it by extracting unique visual landmarks (corners or textures) and tracking their movement within frames. VIO fuses this visual data with the camera's internal IMU to provide smooth motion tracking and localization.

This system also enables us to detect the 3D position of objects, and track them at a high frame rate and resolution. Combining the robot localization with spatial object tracking in real-time expands our locomotion abilities to more modern and sophisticated pathing algorithms.

{% css "local" %}
  {% include "css/sponsors.css" %}
{% endcss %}
