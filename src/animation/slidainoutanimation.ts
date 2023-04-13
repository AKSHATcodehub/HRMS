import { animate, style, transition, trigger } from "@angular/animations";

export const enterLeaveAnimation=
  trigger("enterLeaveAnimation", [
    transition(":enter", [
      style({ opacity: 0, transform: "translateX(100%)" }), //apply default styles before animation starts
      animate(
        "750ms ease-in-out",
        style({ opacity: 1, transform: "translateX(0)" })
      )
    ]),
    transition(":leave", [
      style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
      animate(
        "600ms ease-in-out",
        style({ opacity: 0, transform: "translateX(100%)" })
      )
    ])
  ])
