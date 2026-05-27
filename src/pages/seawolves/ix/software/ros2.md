---
title: Robot Operating System 2 (ROS2) with Zenoh
sort: 1
---

Integrating ROS2 into our software stack allows us to leverage an extensive ecosystem of existing packages, drastically reducing the amount of boilerplate code. Utilizing the ROS2 drivers for the depth camera greatly simplified the integration, allowing us to shift our focus toward higher-level problem solving. This modularity ensures that, as we add more sensing capabilities to SeaWolf IX, interfacing with the new hardware will still be straightforward and efficient.

To handle the high-bandwidth data from these sensors, we use Zenoh as the underlying middleware for communication with ROS2 topics and publishers hosted on our docker containers. Unlike standard Data Distribution Service (DDS), Zenoh's architecture provides significant performance benefits through shared memory transports, which allow large data packets like pointclouds to be passed between nodes and processes over memory, bypassing the network serialization overhead. This ensures ultra low-latency communication across our software stack.

Despite these upgrades, the core Rust architecture of SeaWolf IX remains intact by injecting ROS2 data through dedicated subscriber threads, while running the external ROS2 nodes separately through docker. This hybrid approach allows us to reuse our systems from previous iterations while modularly adding new features where necessary. This separation keeps SeaWolf IX robust and scalable, while minimizing architecture rewrites.
