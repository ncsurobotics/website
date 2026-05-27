---
title: Logic
sort: 1
---
#### Nvidia Jetson
![Nvidia Jetson](/assets/images/electrical/jetson.jpg){ .w-[40vw] }

The Jetson is SeaWolf IX's primary computational unit. It runs the robot's high-level software and serves as the programmer's interface to the electronics system. 

#### Main Electronics Board (MEB) 
![Main Electronics Board](/assets/images/electrical/SWIX_MEB.png){ .w-[40vw] }
The Main Electronics Board, or MEB, handles core robot support functions that do not belong directly on the Jetson or the motor control board. It serves as the central interface between the onboard computer, the expansion stack, and several low-level electrical systems.

Key features:
- Controls leak detection behavior
- Manages thruster power disconnection logic
- Drives the external LED bar
- Acts as the master device for the shared I2C bus
- Bridges expansion-stack peripherals to the Nvidia Jetson

The MEB keeps essential robot-health and support functions on dedicated hardware, reducing the amount of low-level electrical management required from the main computer.

#### Vertical Expansion Stack
![Vertical Expansion Stack Pinout](/assets/images/electrical/eb_pinout.png){ .w-[40vw] }
The electrical system uses a common vertical board format that allows additional PCBs to be added above the main electronics. Each board shares the same physical footprint and keyed connector layout, making the stack mechanically consistent and difficult to assemble incorrectly.

Key features:
- Common board footprint across stackable PCBs
- Shared connector carrying battery voltage, 12V, 5V, 3.3V, ground, and I2C
- Keyed header to prevent boards from being installed backward
- Supports future expansion cards
- Allows new subsystems to be added without redesigning the core electronics