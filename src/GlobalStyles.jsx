import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    font-family: 'Josefin Sans', sans-serif;
    padding: 0;
    margin:0;
    /* border: 2px solid red; */

/* overflow-y: visible; */
    /* ### Light Theme */

/* Very-Light-Gray: hsl(0, 0%, 98%);
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%) */
/* ### Dark Theme */
/* - Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%) */


}



ul,ol{
    padding: 0;
    margin: 0;
    list-style-type: none;
}

`;
