---
title: Control
sort: 2
---

#### Control Board
![Control Board](/assets/images/electrical/SWIX_CONTROL_BOARD.png){ .w-[40vw] }

The Control Board is a custom PCB responsible for translating high-level movement commands into individual thruster outputs. The Nvidia Jetson sends desired vehicle motion commands, while the control board handles the lower-level task of computing PWM signals for each thruster based on the robot’s configuration and current state. This keeps the autonomy software more vehicle-agnostic and frees the Jetson to focus on perception, planning, and mission logic.

Key features:
- Uses an STM32 microcontroller for real-time thruster control
- Includes a BNO055 IMU for vehicle state feedback
- Converts high-level velocity commands into individual thruster PWM outputs
- Supports PID stabilization for depth, pitch, roll, and yaw
- Uses quaternion-based orientation control to avoid Euler-angle singularities
- Offloads low-level motor control from the Nvidia Jetson
- Includes digital isolators on thruster PWM lines to protect logic electronics from unintended high-current return paths

#### Electronic Speed Controllers (ESCs)
The onboard ESCs receive PWM signals from the control board, which encode thruster speed commands, and convert them into current through the motors three phases.
