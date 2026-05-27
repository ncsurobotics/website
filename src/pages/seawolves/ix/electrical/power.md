---
title: Power
sort: 0
---

#### Batteries
![Battery](/assets/images/electrical/battery.jpg){ .w-[40vw] }

SeaWolf IX utilizes two 4s 10,000mAH LiPo batteries to power the entire system. It was designed to use the same batteries as SeaWolf VIII for maximum component reuse. 
#### Battery Board
![Battery Board](/assets/images/electrical/SWIX_BATTERY_BOARD.png){ .w-[40vw] }

The Battery Board is the central high-current power management board for SeaWolf IX. It combines the two 4S LiPo battery inputs, controls how battery power enters the robot, and handles safety-critical shutdown behavior. The board replaces several separate components from the previous vehicle with one integrated PCB, improving packaging, reliability, and serviceability.

Key features:
- Combines two LiPo battery inputs using an ideal-diode controller
- Prevents mismatched batteries from driving current into one another
- Integrates voltage and current sensing for automatic shutdown behavior
- Responds to power switch state and emergency cutoff conditions
- Routes power to the regulator stack and raw battery thruster bus
- Designed for an 80A total system current rating with low-loss MOSFETs

#### Regulators
SeaWolf IX uses a vertically stacked regulator system to generate the voltage rails needed throughout the vehicle. The battery voltage is converted into the robot’s 12V, 5V, and 3.3V supplies, which are then passed upward through the electrical stack.

Key features:
- Converts raw battery voltage into regulated system rails
- Provides 12V, 5V, and 3.3V power domains
- Forms the base of the vertical electronics stack
- Keeps power distribution compact and modular