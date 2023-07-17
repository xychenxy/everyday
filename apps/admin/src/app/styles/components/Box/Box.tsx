import { createBox } from "@dessert-box/react";

import { sprinkles } from "@/app/styles/theme/sprinkle.css";

/**
 * Box is a basic component that gives access to atomic styles (Sprinkles).
 */
const Box = createBox({ atoms: sprinkles });
export default Box;
