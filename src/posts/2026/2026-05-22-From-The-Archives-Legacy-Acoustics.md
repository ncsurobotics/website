---
title: 'From The Archives: Legacy Acoustics Build Log'
description: The build log for our previous acoustics system, originally written back in 2015.
date: 2026-05-22
tags:
  - URC
  - tumblr
gallery:
  - image: "/assets/images/blog/tumblr/acoustics_build_log/1BreadboardPrototype1.jpg"
    caption: This was the first prototype built to figure out whether the Beaglebone black (BBB) will play nicely with the ADS7865.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/2BreadboardPrototype2BeforeTesting.jpg"
    caption: This is the second prototype of the acoustics circuit board. It's nice to reflect on how neat and organized these things are before testing them.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/3BreadboardPrototype2AfterTesting.jpg"
    caption: Over the course of testing, several hardware and software bugs were ironed out.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/4PCBDesignComplete.png"
    caption: After much testing and deliberation, the actual PCB design was finalized and ready to be fabricated at Advanced Circuits. This is a 3D render of the finalized board design.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/5PackageRecieved.jpg"
    caption: Nice to see what was previously a CAD design finally in your hands. First shot of the bare board before taking it to the lab.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/6PCB.jpg"
    caption: This is just another shot of the bare board before putting any components. The yellow Kapton tape was used to prevent excess solder overflowing a couple holes that were located directly underneath a couple ICs.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/7PowerSupplyComplete.jpg"
    caption: A picture of the power switch and status LED
  - image: "/assets/images/blog/tumblr/acoustics_build_log/8SingleAcousticsChannelComplete.jpg"
    caption: A complete singe channel board
  - image: "/assets/images/blog/tumblr/acoustics_build_log/9AddingheadersandBeaglebonePowerSupply.jpg"
    caption: Adding headers and Beaglebone power supply
  - image: "/assets/images/blog/tumblr/acoustics_build_log/10BoardComplete.jpg"
    caption: Board complete!
  - image: "/assets/images/blog/tumblr/acoustics_build_log/11SolderingExternalLevelShifter.jpg"
    caption: A level shifter circuit was needed in order to get the Beaglebone to control the programmable filter/amplifier ICs. Here is a view of that circuit which is basically a breakout board from Sparkfun.
  - image: "/assets/images/blog/tumblr/acoustics_build_log/12HeatShrinkontheLevelShifter.jpg"
    caption: Had to add heatshrink to the level shifter circuit in order to prevent shorts with the main board or the metal enclosure it's going in.
---
<custom-masonry layout="50-50">
  {% for item in gallery %}
      <div>{% image item.image, item.caption, item.caption %}</div>
  {% endfor %}
</custom-masonry>
