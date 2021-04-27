import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @font-face {
      font-family: 'BAHNSCHRIFT';
      font-weight: 100 900;
      font-style: normal;
      font-named-instance:'Regular';
      font-display: swap;
      src: url("https://livetonight.s3-eu-west-1.amazonaws.com/font/BAHNSCHRIFT.woff") format("woff");
    }

    @font-face {
      font-family: 'Hwt Artz';
      font-weight: 100 900;
      font-style: normal;
      font-named-instance:'Regular';
      font-display: swap;
      src: url("https://livetonight.s3-eu-west-1.amazonaws.com/font/HWTARTZ.otf") format("truetype");
    }

    /* CSS RESET */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    a {
      text-decoration : none;
    }
    button,
    input,
    optgroup,
    select,
    textarea,html input[type="button"],
    input[type="reset"],
    input[type="submit"],button[disabled],
    html input[disabled],button::-moz-focus-inner,
    input::-moz-focus-inner, input[type="checkbox"],
    input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      outline : none;
    }

    /* CUSTOM CSS */
    * {
      box-sizing: border-box;
      font-family : NeueMontrealRegular;
    }

    html {
      overflow-x : hidden;
    }
    body {
      padding: 0;
      margin: 0;
      font-family: 'BAHNSCHRIFT';
      font-weight : 200;
    }

    .headline {
      font-family : 'Hwt Artz';
      font-size : 24px;
      letter-spacing : 0.1rem;
      color : ${({ theme }) => theme.colors.title};

      &.underline {
        
      }
    }

    .button {
      padding: 10px;
      width: 140px;
      border: 1px solid white;
      color: white;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      background : none;
      font-family : 'BAHNSCHRIFT';

      &.contact {
        background: ${({ theme }) => theme.colors.main};
          box-shadow : 1px 2px 3px rgb(0 0 0 / 30%);
      }
    }
`
