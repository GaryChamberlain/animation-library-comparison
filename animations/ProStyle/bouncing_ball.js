ProStyle.Stories.bouncing_ball = {
    frame: { aspectRatio: 1 },
    items: [
        {
            itemType: "layer",                  /* Container */
            init: {bg: "#222", corners:50},
            action: {
                anim: {
                    dur: 8,
                    ease: "linear"
                },
                rot: 360
            },
            item: {
                itemType: "layer",              /* Ball */
                init: { 
                    bg: "#9b2",
                    size: [40,40],
                    corners: 50,
                    pos: [-30,0]
                },
                action: {
                    anim: {
                        dur: 1,
                        ease: "sine inout",
                        repeat: [7, 'yoyo'],
                        yoyo: true
                    },
                    pos: [30, 0]
                }
            }
        }
    ],
    controllers: [
        { controllerType: "auto", start: true, stepAdvance: true, restart: true },
        { controllerType: "track", color: "#9b2" },
        { controllerType: "resize" },
        { controllerType: "mouseWheel" }
    ]
};