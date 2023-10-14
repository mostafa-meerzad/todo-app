import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    font-family: 'Josefin Sans', sans-serif;
    padding:3rem 0 0 ;
    margin:0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: grid; */
    /* place-content: center; */
    /* width: 100vw; */
    /* height: 100; */
    /* border: 2px solid red; */
    position: relative;

    background-image: url("./bg-mobile-light.jpg");
    background-position: center top ;
    background-size: 100% 90%;
    background-repeat: no-repeat;




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

main{
    width: 23rem;
    /* width: 100%; */
    position: sticky;
}
`;
