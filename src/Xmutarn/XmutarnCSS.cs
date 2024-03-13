using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Themes;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa o CSS do Xmutarn.
/// </summary>
public class XmutarnCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="XmutarnCSS"/>.
    /// </summary>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    public XmutarnCSS(bool isMinified = false) : base(isMinified)
    {
        AddHeader();

        // Cores e temas.
        Import(Colors);
        Import(Themes);

        if (IsMinified)
        {
            AddOldMinCSS();
        }
        else
        {
            AddOldCSS();
        }
    }

    /// <summary>
    /// Obtém o CSS das cores.
    /// </summary>
    public ColorsCSS Colors { get; } = [];

    /// <summary>
    /// Obtém o CSS dos temas.
    /// </summary>
    public ThemeCSS Themes { get; } = [];

    #region Antigo CSS.

    /// <summary>
    /// Adiciona o cabeçalho do CSS antigo do Xmutarn.
    /// </summary>
    private void AddHeader()
    {
        Import(new CSS() + $"""
            /*! Xmutarn v0.32.0-beta.1 (https://xmutarn.kempdec.com) | Copyright 2016-{DateTime.Now.Year} KempDec Brasil Ltda. | Licensed under MIT */
            """);

        if (IsMinified)
        {
            Import(new CSS() + Environment.NewLine);
        }
    }

    /// <summary>
    /// Adiciona o CSS antigo do Xmutarn.
    /// </summary>
    private void AddOldCSS() => Import(new CSS() + """
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        /* Document
           ========================================================================== */
        /**
         * 1. Correct the line height in all browsers.
         * 2. Prevent adjustments of font size after orientation changes in iOS.
         */
        html {
          line-height: 1.15;
          /* 1 */
          -webkit-text-size-adjust: 100%;
          /* 2 */
        }

        /* Sections
           ========================================================================== */
        /**
         * Remove the margin in all browsers.
         */
        body {
          margin: 0;
        }

        /**
         * Render the `main` element consistently in IE.
         */
        main {
          display: block;
        }

        /**
         * Correct the font size and margin on `h1` elements within `section` and
         * `article` contexts in Chrome, Firefox, and Safari.
         */
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }

        /* Grouping content
           ========================================================================== */
        /**
         * 1. Add the correct box sizing in Firefox.
         * 2. Show the overflow in Edge and IE.
         */
        hr {
          box-sizing: content-box;
          /* 1 */
          height: 0;
          /* 1 */
          overflow: visible;
          /* 2 */
        }

        /**
         * 1. Correct the inheritance and scaling of font size in all browsers.
         * 2. Correct the odd `em` font sizing in all browsers.
         */
        pre {
          font-family: monospace, monospace;
          /* 1 */
          font-size: 1em;
          /* 2 */
        }

        /* Text-level semantics
           ========================================================================== */
        /**
         * Remove the gray background on active links in IE 10.
         */
        a {
          background-color: transparent;
        }

        /**
         * 1. Remove the bottom border in Chrome 57-
         * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
         */
        abbr[title] {
          border-bottom: none;
          /* 1 */
          text-decoration: underline;
          /* 2 */
          -webkit-text-decoration: underline dotted;
                  text-decoration: underline dotted;
          /* 2 */
        }

        /**
         * Add the correct font weight in Chrome, Edge, and Safari.
         */
        b,
        strong {
          font-weight: bolder;
        }

        /**
         * 1. Correct the inheritance and scaling of font size in all browsers.
         * 2. Correct the odd `em` font sizing in all browsers.
         */
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          /* 1 */
          font-size: 1em;
          /* 2 */
        }

        /**
         * Add the correct font size in all browsers.
         */
        small {
          font-size: 80%;
        }

        /**
         * Prevent `sub` and `sup` elements from affecting the line height in
         * all browsers.
         */
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        /* Embedded content
           ========================================================================== */
        /**
         * Remove the border on images inside links in IE 10.
         */
        img {
          border-style: none;
        }

        /* Forms
           ========================================================================== */
        /**
         * 1. Change the font styles in all browsers.
         * 2. Remove the margin in Firefox and Safari.
         */
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          /* 1 */
          font-size: 100%;
          /* 1 */
          line-height: 1.15;
          /* 1 */
          margin: 0;
          /* 2 */
        }

        /**
         * Show the overflow in IE.
         * 1. Show the overflow in Edge.
         */
        button,
        input {
          /* 1 */
          overflow: visible;
        }

        /**
         * Remove the inheritance of text transform in Edge, Firefox, and IE.
         * 1. Remove the inheritance of text transform in Firefox.
         */
        button,
        select {
          /* 1 */
          text-transform: none;
        }

        /**
         * Correct the inability to style clickable types in iOS and Safari.
         */
        button,
        [type=button],
        [type=reset],
        [type=submit] {
          -webkit-appearance: button;
        }

        /**
         * Remove the inner border and padding in Firefox.
         */
        button::-moz-focus-inner,
        [type=button]::-moz-focus-inner,
        [type=reset]::-moz-focus-inner,
        [type=submit]::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        /**
         * Restore the focus styles unset by the previous rule.
         */
        button:-moz-focusring,
        [type=button]:-moz-focusring,
        [type=reset]:-moz-focusring,
        [type=submit]:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        /**
         * Correct the padding in Firefox.
         */
        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }

        /**
         * 1. Correct the text wrapping in Edge and IE.
         * 2. Correct the color inheritance from `fieldset` elements in IE.
         * 3. Remove the padding so developers are not caught out when they zero out
         *    `fieldset` elements in all browsers.
         */
        legend {
          box-sizing: border-box;
          /* 1 */
          color: inherit;
          /* 2 */
          display: table;
          /* 1 */
          max-width: 100%;
          /* 1 */
          padding: 0;
          /* 3 */
          white-space: normal;
          /* 1 */
        }

        /**
         * Add the correct vertical alignment in Chrome, Firefox, and Opera.
         */
        progress {
          vertical-align: baseline;
        }

        /**
         * Remove the default vertical scrollbar in IE 10+.
         */
        textarea {
          overflow: auto;
        }

        /**
         * 1. Add the correct box sizing in IE 10.
         * 2. Remove the padding in IE 10.
         */
        [type=checkbox],
        [type=radio] {
          box-sizing: border-box;
          /* 1 */
          padding: 0;
          /* 2 */
        }

        /**
         * Correct the cursor style of increment and decrement buttons in Chrome.
         */
        [type=number]::-webkit-inner-spin-button,
        [type=number]::-webkit-outer-spin-button {
          height: auto;
        }

        /**
         * 1. Correct the odd appearance in Chrome and Safari.
         * 2. Correct the outline style in Safari.
         */
        [type=search] {
          -webkit-appearance: textfield;
          /* 1 */
          outline-offset: -2px;
          /* 2 */
        }

        /**
         * Remove the inner padding in Chrome and Safari on macOS.
         */
        [type=search]::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        /**
         * 1. Correct the inability to style clickable types in iOS and Safari.
         * 2. Change font properties to `inherit` in Safari.
         */
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          /* 1 */
          font: inherit;
          /* 2 */
        }

        /* Interactive
           ========================================================================== */
        /*
         * Add the correct display in Edge, IE 10+, and Firefox.
         */
        details {
          display: block;
        }

        /*
         * Add the correct display in all browsers.
         */
        summary {
          display: list-item;
        }

        /* Misc
           ========================================================================== */
        /**
         * Add the correct display in IE 10+.
         */
        template {
          display: none;
        }

        /**
         * Add the correct display in IE 10.
         */
        [hidden] {
          display: none;
        }

        html {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        ::-moz-selection {
          color: white;
          background-color: var(--theme-A400, #F50057);
        }

        ::selection {
          color: white;
          background-color: var(--theme-A400, #F50057);
        }

        a {
          color: var(--theme-500, #9C27B0);
          text-decoration: none;
        }
        a:hover, a:active {
          color: var(--theme-300, #BA68C8);
        }

        figure {
          margin: 0;
        }

        input::-ms-clear,
        input[type=password]::-ms-reveal {
          display: none;
        }

        .border-divider {
          display: block;
          margin: 0;
          height: 0;
          border-top: 1px solid var(--theme-dividers, rgba(0, 0, 0, 0.12));
        }
        .border-divider_padded {
          margin: 0 1rem;
        }

        .container, .container-fluid {
          margin: 0 auto;
          padding: 0 0.9375rem;
          width: 100%;
        }

        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
        }
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
        .flex-row {
          display: flex;
          margin: 0 -0.9375rem;
          flex-wrap: wrap;
        }

        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 100;
          src: local("Roboto Thin"), local("Roboto-Thin"), url("../fonts/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzI.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 100;
          src: local("Roboto Thin Italic"), local("Roboto-ThinItalic"), url("../fonts/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 300;
          src: local("Roboto Light"), local("Roboto-Light"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 300;
          src: local("Roboto Light Italic"), local("Roboto-LightItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          src: local("Roboto"), local("Roboto-Regular"), url("../fonts/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 400;
          src: local("Roboto Italic"), local("Roboto-Italic"), url("../fonts/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzI.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          src: local("Roboto Medium"), local("Roboto-Medium"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 500;
          src: local("Roboto Medium Italic"), local("Roboto-MediumItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          src: local("Roboto Bold"), local("Roboto-Bold"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 700;
          src: local("Roboto Bold Italic"), local("Roboto-BoldItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 900;
          src: local("Roboto Black"), local("Roboto-Black"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 900;
          src: local("Roboto Black Italic"), local("Roboto-BlackItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        .input {
          position: relative;
          font-weight: 500;
          color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
          border-color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
        }
        .input_color-alert {
          color: #F44336;
          border-color: #F44336;
        }
        .input_color-success {
          color: #4CAF50;
          border-color: #4CAF50;
        }
        .input_color-warning {
          color: #FF9800;
          border-color: #FF9800;
        }
        .input--field {
          padding: 1em 0.3125em 0.75em 0;
          width: 100%;
          font-size: inherit;
          font-weight: inherit;
          line-height: 1;
          color: inherit;
          background-color: transparent;
        }
        .input--field:focus {
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
          border-color: var(--theme-500, #9C27B0);
          outline: 0;
        }
        .input--field:focus:not(.input--field_outlined) {
          border-color: var(--theme-500, #9C27B0);
        }
        .input--field:focus ~ .input--label {
          color: var(--theme-500, #9C27B0);
        }
        .input--field:not(.input--field_outlined) {
          padding-left: 0.3125em;
          border: none;
          border-bottom: 0.0625rem solid;
        }
        .input--field:not(.input--field_outlined) ~ .input--label {
          left: 0.3125em;
        }
        .input--field_outlined {
          padding-left: 0.625em;
          border: 1px solid;
          border-color: inherit;
          border-radius: 0.3125em;
        }
        .input--field_outlined ~ .input--label {
          left: 0.625em;
        }
        .input--label {
          position: absolute;
          top: 1em;
          transition: all 0.3s linear;
          pointer-events: none;
        }
        .input--label_active, .input--field:focus ~ .input--label {
          transform: translate(-15%, -1.125em) scale(0.7);
        }
        .input--description {
          margin: 0;
          margin-top: 0.3125rem;
          font-size: 0.75rem;
          color: inherit;
        }

        .typo-use-roboto, .typo-use-default {
          font-family: "Roboto", sans-serif;
        }

        .typo-style-italic {
          font-style: italic !important;
        }

        .typo-overflow-ellipsis, .typo-overflow-clip {
          white-space: nowrap;
          overflow: hidden;
        }

        .typo-overflow-clip {
          text-overflow: clip;
        }

        .typo-overflow-ellipsis {
          text-overflow: ellipsis;
        }

        .typo-to-upper {
          text-transform: uppercase !important;
        }

        .typo-to-lower {
          text-transform: lowercase !important;
        }

        .typo-to-capitalize {
          text-transform: capitalize !important;
        }

        .typo-weight-thin {
          font-weight: 100 !important;
        }

        .typo-weight-light {
          font-weight: 300 !important;
        }

        .typo-weight-regular {
          font-weight: 400 !important;
        }

        .typo-weight-medium {
          font-weight: 500 !important;
        }

        .typo-weight-bold {
          font-weight: 700 !important;
        }

        .typo-weight-black {
          font-weight: 900 !important;
        }

        .typo-h1 {
          font-size: 6rem;
          font-weight: 300;
          letter-spacing: -0.01562em;
          line-height: 1;
        }

        .typo-h2 {
          font-size: 3.75rem;
          font-weight: 300;
          letter-spacing: -0.00833em;
          line-height: 1;
        }

        .typo-h3 {
          font-size: 3rem;
          font-weight: 400;
          letter-spacing: normal;
          line-height: 3.125rem;
        }

        .typo-h4 {
          font-size: 2.125rem;
          font-weight: 400;
          letter-spacing: 0.00735em;
          line-height: 2.5rem;
        }

        .typo-h5 {
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: normal;
          line-height: 2rem;
        }

        .typo-h6 {
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.0125em;
          line-height: 1.6;
        }

        .typo-subtitle-1 {
          font-size: 1.125rem;
          font-weight: 400;
          letter-spacing: 0.00937em;
          line-height: 1.875rem;
        }

        .typo-subtitle-2 {
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.00714em;
          line-height: 1.625rem;
        }

        .typo-body-1 {
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: 0.03125em;
          line-height: 1.5;
        }

        .typo-body-2, .avatar--title, .avatar--summary {
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.01786em;
          line-height: 1.5rem;
        }

        .typo-caption-1 {
          font-size: 0.8125rem;
          font-weight: 400;
          letter-spacing: 0.03333em;
          line-height: 1.375rem;
        }

        .typo-caption-2 {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.03333em;
          line-height: 1.25rem;
        }

        .typo-align-left {
          text-align: left !important;
        }

        .typo-align-right {
          text-align: right !important;
        }

        .typo-align-center {
          text-align: center !important;
        }

        .typo-align-justify {
          text-align: justify !important;
        }

        @media (min-width: 576px) {
          .typo-h1__sm {
            font-size: 6rem;
            font-weight: 300;
            letter-spacing: -0.01562em;
            line-height: 1;
          }

          .typo-h2__sm {
            font-size: 3.75rem;
            font-weight: 300;
            letter-spacing: -0.00833em;
            line-height: 1;
          }

          .typo-h3__sm {
            font-size: 3rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 3.125rem;
          }

          .typo-h4__sm {
            font-size: 2.125rem;
            font-weight: 400;
            letter-spacing: 0.00735em;
            line-height: 2.5rem;
          }

          .typo-h5__sm {
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 2rem;
          }

          .typo-h6__sm {
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            line-height: 1.6;
          }

          .typo-subtitle-1__sm {
            font-size: 1.125rem;
            font-weight: 400;
            letter-spacing: 0.00937em;
            line-height: 1.875rem;
          }

          .typo-subtitle-2__sm {
            font-size: 0.9375rem;
            font-weight: 500;
            letter-spacing: 0.00714em;
            line-height: 1.625rem;
          }

          .typo-body-1__sm {
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.03125em;
            line-height: 1.5;
          }

          .typo-body-2__sm {
            font-size: 0.875rem;
            font-weight: 400;
            letter-spacing: 0.01786em;
            line-height: 1.5rem;
          }

          .typo-caption-1__sm {
            font-size: 0.8125rem;
            font-weight: 400;
            letter-spacing: 0.03333em;
            line-height: 1.375rem;
          }

          .typo-caption-2__sm {
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.03333em;
            line-height: 1.25rem;
          }

          .typo-align-left__sm {
            text-align: left !important;
          }

          .typo-align-right__sm {
            text-align: right !important;
          }

          .typo-align-center__sm {
            text-align: center !important;
          }
        }
        @media (min-width: 768px) {
          .typo-h1__md {
            font-size: 6rem;
            font-weight: 300;
            letter-spacing: -0.01562em;
            line-height: 1;
          }

          .typo-h2__md {
            font-size: 3.75rem;
            font-weight: 300;
            letter-spacing: -0.00833em;
            line-height: 1;
          }

          .typo-h3__md {
            font-size: 3rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 3.125rem;
          }

          .typo-h4__md {
            font-size: 2.125rem;
            font-weight: 400;
            letter-spacing: 0.00735em;
            line-height: 2.5rem;
          }

          .typo-h5__md {
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 2rem;
          }

          .typo-h6__md {
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            line-height: 1.6;
          }

          .typo-subtitle-1__md {
            font-size: 1.125rem;
            font-weight: 400;
            letter-spacing: 0.00937em;
            line-height: 1.875rem;
          }

          .typo-subtitle-2__md {
            font-size: 0.9375rem;
            font-weight: 500;
            letter-spacing: 0.00714em;
            line-height: 1.625rem;
          }

          .typo-body-1__md {
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.03125em;
            line-height: 1.5;
          }

          .typo-body-2__md {
            font-size: 0.875rem;
            font-weight: 400;
            letter-spacing: 0.01786em;
            line-height: 1.5rem;
          }

          .typo-caption-1__md {
            font-size: 0.8125rem;
            font-weight: 400;
            letter-spacing: 0.03333em;
            line-height: 1.375rem;
          }

          .typo-caption-2__md {
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.03333em;
            line-height: 1.25rem;
          }

          .typo-align-left__md {
            text-align: left !important;
          }

          .typo-align-right__md {
            text-align: right !important;
          }

          .typo-align-center__md {
            text-align: center !important;
          }
        }
        @media (min-width: 992px) {
          .typo-h1__lg {
            font-size: 6rem;
            font-weight: 300;
            letter-spacing: -0.01562em;
            line-height: 1;
          }

          .typo-h2__lg {
            font-size: 3.75rem;
            font-weight: 300;
            letter-spacing: -0.00833em;
            line-height: 1;
          }

          .typo-h3__lg {
            font-size: 3rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 3.125rem;
          }

          .typo-h4__lg {
            font-size: 2.125rem;
            font-weight: 400;
            letter-spacing: 0.00735em;
            line-height: 2.5rem;
          }

          .typo-h5__lg {
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 2rem;
          }

          .typo-h6__lg {
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            line-height: 1.6;
          }

          .typo-subtitle-1__lg {
            font-size: 1.125rem;
            font-weight: 400;
            letter-spacing: 0.00937em;
            line-height: 1.875rem;
          }

          .typo-subtitle-2__lg {
            font-size: 0.9375rem;
            font-weight: 500;
            letter-spacing: 0.00714em;
            line-height: 1.625rem;
          }

          .typo-body-1__lg {
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.03125em;
            line-height: 1.5;
          }

          .typo-body-2__lg {
            font-size: 0.875rem;
            font-weight: 400;
            letter-spacing: 0.01786em;
            line-height: 1.5rem;
          }

          .typo-caption-1__lg {
            font-size: 0.8125rem;
            font-weight: 400;
            letter-spacing: 0.03333em;
            line-height: 1.375rem;
          }

          .typo-caption-2__lg {
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.03333em;
            line-height: 1.25rem;
          }

          .typo-align-left__lg {
            text-align: left !important;
          }

          .typo-align-right__lg {
            text-align: right !important;
          }

          .typo-align-center__lg {
            text-align: center !important;
          }
        }
        @media (min-width: 1200px) {
          .typo-h1__xl {
            font-size: 6rem;
            font-weight: 300;
            letter-spacing: -0.01562em;
            line-height: 1;
          }

          .typo-h2__xl {
            font-size: 3.75rem;
            font-weight: 300;
            letter-spacing: -0.00833em;
            line-height: 1;
          }

          .typo-h3__xl {
            font-size: 3rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 3.125rem;
          }

          .typo-h4__xl {
            font-size: 2.125rem;
            font-weight: 400;
            letter-spacing: 0.00735em;
            line-height: 2.5rem;
          }

          .typo-h5__xl {
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: normal;
            line-height: 2rem;
          }

          .typo-h6__xl {
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.0125em;
            line-height: 1.6;
          }

          .typo-subtitle-1__xl {
            font-size: 1.125rem;
            font-weight: 400;
            letter-spacing: 0.00937em;
            line-height: 1.875rem;
          }

          .typo-subtitle-2__xl {
            font-size: 0.9375rem;
            font-weight: 500;
            letter-spacing: 0.00714em;
            line-height: 1.625rem;
          }

          .typo-body-1__xl {
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.03125em;
            line-height: 1.5;
          }

          .typo-body-2__xl {
            font-size: 0.875rem;
            font-weight: 400;
            letter-spacing: 0.01786em;
            line-height: 1.5rem;
          }

          .typo-caption-1__xl {
            font-size: 0.8125rem;
            font-weight: 400;
            letter-spacing: 0.03333em;
            line-height: 1.375rem;
          }

          .typo-caption-2__xl {
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.03333em;
            line-height: 1.25rem;
          }

          .typo-align-left__xl {
            text-align: left !important;
          }

          .typo-align-right__xl {
            text-align: right !important;
          }

          .typo-align-center__xl {
            text-align: center !important;
          }
        }
        .border-left-lg, .border-bottom-lg, .border-right-lg, .border-top-lg, .border-lg, .border-left-md, .border-bottom-md, .border-right-md, .border-top-md, .border-md, .border-left-sm, .border-bottom-sm, .border-right-sm, .border-top-sm, .border-sm, .border-left-0, .border-bottom-0, .border-right-0, .border-top-0, .border-0 {
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important;
        }

        .flex-col-12__xl, .flex-col-11__xl, .flex-col-10__xl, .flex-col-9__xl, .flex-col-8__xl, .flex-col-7__xl, .flex-col-6__xl, .flex-col-5__xl, .flex-col-4__xl, .flex-col-3__xl, .flex-col-2__xl, .flex-col-1__xl, .flex-col-12__lg, .flex-col-11__lg, .flex-col-10__lg, .flex-col-9__lg, .flex-col-8__lg, .flex-col-7__lg, .flex-col-6__lg, .flex-col-5__lg, .flex-col-4__lg, .flex-col-3__lg, .flex-col-2__lg, .flex-col-1__lg, .flex-col-12__md, .flex-col-11__md, .flex-col-10__md, .flex-col-9__md, .flex-col-8__md, .flex-col-7__md, .flex-col-6__md, .flex-col-5__md, .flex-col-4__md, .flex-col-3__md, .flex-col-2__md, .flex-col-1__md, .flex-col-12__sm, .flex-col-11__sm, .flex-col-10__sm, .flex-col-9__sm, .flex-col-8__sm, .flex-col-7__sm, .flex-col-6__sm, .flex-col-5__sm, .flex-col-4__sm, .flex-col-3__sm, .flex-col-2__sm, .flex-col-1__sm, .flex-col-12, .flex-col-11, .flex-col-10, .flex-col-9, .flex-col-8, .flex-col-7, .flex-col-6, .flex-col-5, .flex-col-4, .flex-col-3, .flex-col-2, .flex-col-1 {
          position: relative;
          width: 100%;
          padding: 0 0.9375rem;
        }

        .btn {
          position: relative;
          display: inline-flex;
          overflow: hidden;
          padding: 0 1.143em;
          height: 2.571875em;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          border-radius: 0.25rem;
          justify-content: center;
          align-items: center;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
        }
        .btn:not(.btn_outlined):not(.btn_outlined-color) {
          border: none;
        }
        .btn:not([disabled]):not(.btn_disabled) {
          cursor: pointer;
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color) {
          color: white;
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color)::before {
          background-color: white;
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color):not(.btn_color-accent), .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-featured {
          background-color: var(--theme-500, #9C27B0);
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-accent {
          background-color: var(--theme-A400, #F50057);
        }
        .btn:not([disabled]):not(.btn_disabled):hover::before {
          opacity: 0.12;
        }
        .btn:not([disabled]):not(.btn_disabled):active::before {
          opacity: 0.36;
        }
        .btn:focus {
          outline: 0;
        }
        .btn:focus::before {
          opacity: 0.18;
        }
        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
          will-change: opacity;
          transition: opacity 0.2s;
        }
        .btn[disabled], .btn_disabled {
          cursor: default;
          color: var(--theme-disabled, rgba(0, 0, 0, 0.38)) !important;
          background-color: var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important;
        }
        .btn[disabled]::before, .btn_disabled::before {
          background-color: var(--theme-disabled, rgba(0, 0, 0, 0.38));
        }
        .btn_flat:not([disabled]):not(.btn_disabled), .btn_outlined:not([disabled]):not(.btn_disabled), .btn_outlined-color:not([disabled]):not(.btn_disabled) {
          background-color: transparent;
        }
        .btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent), .btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured, .btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent), .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured, .btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent), .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured {
          color: var(--theme-500, #9C27B0);
        }
        .btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before, .btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured::before, .btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before, .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured::before, .btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before, .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured::before {
          background-color: var(--theme-500, #9C27B0);
        }
        .btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent, .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent, .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent {
          color: var(--theme-A400, #F50057);
        }
        .btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent::before, .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent::before, .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent::before {
          background-color: var(--theme-A400, #F50057);
        }
        .btn_outlined, .btn_outlined-color {
          border: 1px solid;
        }
        .btn_outlined, .btn_outlined-color:not(.btn_color-featured):not(.btn_color-accent) {
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12));
        }
        .btn_outlined-color.btn_color-featured {
          border-color: var(--theme-500, #9C27B0);
        }
        .btn_outlined-color.btn_color-accent {
          border-color: var(--theme-A400, #F50057);
        }
        .btn_size-xs {
          font-size: 0.625rem;
        }
        .btn_size-sm {
          font-size: 0.75rem;
        }
        .btn_size-md {
          font-size: 0.875rem;
        }
        .btn_size-lg {
          font-size: 1rem;
        }
        .btn_size-xl {
          font-size: 1.2rem;
        }
        .btn--icon {
          margin-right: 0.571875em;
          margin-left: -0.28625em;
        }

        .dropdown {
          cursor: pointer;
        }
        .dropdown::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          margin: -0.125em 0.3125em 0 0;
          width: 0.3125em;
          height: 0.3125em;
          border-bottom: 0.0625rem solid;
          border-left: 0.0625rem solid;
          border-color: inherit;
          transform: rotate(-45deg);
          transition: transform 0.3s;
        }
        .dropdown_active::before {
          transform: rotate(135deg);
        }

        .menu {
          position: absolute;
          z-index: 80;
          margin: 0;
          min-width: 10.625rem;
          max-width: calc(100vw - 2rem);
          max-height: calc(100vh - 2rem);
          background-color: var(--theme-card, white);
          border-radius: 0.125rem;
          transform: scale(0);
          transition: 0.3s;
          opacity: 0;
          will-change: transform, opacity;
        }
        .menu_open {
          transform: scale(1);
          opacity: 1;
        }
        .menu_origin-top-right, .menu_origin-top-start {
          transform-origin: top right;
        }
        .menu_origin-top-left, .menu_origin-top-end {
          transform-origin: top left;
        }
        .menu_origin-bottom-right, .menu_origin-bottom-start {
          transform-origin: bottom right;
        }
        .menu_origin-bottom-left, .menu_origin-bottom-end {
          transform-origin: bottom left;
        }

        .list {
          margin: 0;
          list-style-type: none;
        }
        .list:not(.list_padded) {
          padding: 0.5rem 0;
        }
        .list_padded {
          padding: 0.5rem;
        }
        .list_padded .list--item {
          border-radius: 0.3125rem;
        }
        .list--item {
          display: flex;
          cursor: pointer;
          padding: 1em;
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
          transition: background-color 0.4s;
          align-items: center;
        }
        .list--item:hover {
          color: inherit;
          background-color: rgba(0, 0, 0, 0.04);
        }
        .list--item:active {
          background-color: rgba(0, 0, 0, 0.16);
        }
        .list--item_active {
          background-color: rgba(0, 0, 0, 0.03);
        }
        .list--item--icon {
          margin-right: 0.571875em;
          margin-left: -0.28625em;
        }

        .toolbar {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          display: flex;
          z-index: 40;
          padding: 0 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          transition: 0.3s;
          will-change: transform;
        }
        .toolbar:not(.toolbar_dark-color) {
          background-color: var(--theme-700, #7B1FA2);
        }
        .toolbar_dark-color {
          background-color: #212121;
        }
        .toolbar_hide {
          transform: translateY(-100%);
        }
        .toolbar > .container,
        .toolbar > .container-fluid {
          display: flex;
          padding: 0;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .toolbar--nav {
          display: flex;
          overflow-x: auto;
          padding: 0.57125em 0;
          list-style: none;
          align-items: center;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
        }
        .toolbar--nav--item {
          position: relative;
          margin: 0 0.125em;
          padding: 1.143em;
          color: inherit;
          background-color: transparent;
          border-radius: 0.25rem;
          transition: background-color 0.4s;
          flex: 0 0 auto;
        }
        .toolbar--nav--item:hover, .toolbar--nav--item:active, .toolbar--nav--item:focus {
          color: inherit;
        }
        .toolbar--nav--item:hover {
          background-color: rgba(255, 255, 255, 0.12);
        }
        .toolbar--nav--item:active {
          background-color: rgba(255, 255, 255, 0.36);
        }
        .toolbar--nav--item:focus {
          background-color: rgba(255, 255, 255, 0.18);
          outline: 0;
        }
        .toolbar--nav--item:not(.toolbar--nav--item_bordered) {
          border: none;
        }
        .toolbar--nav--item_active {
          background-color: rgba(255, 255, 255, 0.07);
        }
        .toolbar--nav--item_bordered {
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .toolbar--nav--item_dark {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .toolbar--nav--item--icon {
          margin-right: 0.259375em;
          margin-left: -0.16125em;
        }

        .card {
          position: relative;
          border-radius: 0.3125rem;
        }
        .card:not(.card_hide-structure) {
          border: 1px solid;
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12));
          background-color: var(--theme-card, white);
        }
        .card_hide-structure {
          background-color: transparent;
          border: none;
        }
        .card--header {
          margin: 0;
          padding: 1rem;
        }
        .card--header--title, .card--header--summary {
          margin: 0;
        }
        .card--header--title {
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
        }
        .card--header--summary {
          color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
        }
        .card--header--small {
          color: inherit;
          opacity: 0.7;
        }
        .card--media {
          position: relative;
          background: black no-repeat top center;
          background-size: cover;
          box-sizing: border-box;
        }
        .card--media::before {
          content: "";
          display: block;
        }
        .card--media:first-child {
          border-top-right-radius: inherit;
          border-top-left-radius: inherit;
        }
        .card--media:last-child {
          border-bottom-right-radius: inherit;
          border-bottom-left-radius: inherit;
        }
        .card--media_format-hd {
          padding-bottom: 56.25%;
        }
        .card--media_format-sd {
          padding-bottom: 75%;
        }
        .card--media_format-square {
          padding-bottom: 100%;
        }
        .card--media--area {
          position: absolute;
          left: 0;
          z-index: 10;
          width: 100%;
        }
        .card--media--area:not(.card--media--area_in-top) {
          bottom: 0;
        }
        .card--media--area_in-top {
          top: 0;
        }
        .card--media--image {
          max-width: 100%;
          max-height: 34.375rem;
        }
        .card--content {
          margin: 0;
          padding: 1rem;
        }
        .card--content p:first-child {
          margin-top: 0;
        }
        .card--content p:last-child {
          margin-bottom: 0;
        }
        .card--action {
          position: relative;
          margin: 0;
          padding: 0.5rem;
        }

        .dialog {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 70;
          overflow-x: hidden;
          overflow-y: auto;
          transition: opacity 0.75s;
          opacity: 0;
          pointer-events: none;
        }
        .dialog_open {
          opacity: 1;
          pointer-events: auto;
        }

        .navigation-drawer {
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          z-index: 60;
          width: 18.75rem;
          height: 100%;
          max-width: 100%;
          background-color: var(--theme-card, white);
          transform: translateX(-100%);
          transition: 0.3s;
          will-change: transform;
        }
        .navigation-drawer_open {
          transform: translateX(0);
        }

        .overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 50;
          min-width: 100%;
          min-height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          transition: opacity 0.25s;
          opacity: 0;
          pointer-events: none;
        }
        .overlay_active {
          opacity: 1;
          pointer-events: auto;
        }

        .toaster {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 90;
          width: 100%;
        }
        .toaster::after {
          content: "";
          display: block;
          clear: both;
        }

        .toast {
          position: relative;
          display: flex;
          margin: 0;
          padding: 0;
          width: 100%;
          font-size: 0.875rem;
          color: white;
          background-color: #323232;
          transform: translate(0, 250%);
          transition: transform 0.25s 0ms cubic-bezier(0.4, 0, 1, 1);
          align-items: center;
        }
        .toast_active {
          transform: translate(0);
          transition: transform 0.25s 0ms cubic-bezier(0, 0, 0.2, 1);
        }
        .toast_color-featured {
          background-color: var(--theme-700, #7B1FA2);
        }
        .toast_color-accent {
          background-color: var(--theme-A400, #F50057);
        }
        .toast_color-success {
          background-color: #4CAF50;
        }
        .toast_color-alert {
          background-color: #F44336;
        }
        .toast_color-warning {
          background-color: #FF9800;
        }
        .toast--icon {
          position: relative;
          display: inline-block;
          margin: 0 0 0 1rem;
        }
        .toast--content {
          position: relative;
          display: inline-block;
          margin: 0;
          padding: 1rem 1.625rem;
        }
        .toast--content--title {
          margin: 0;
          color: inherit;
          font-weight: 500;
        }
        .toast--content--message {
          margin: 0;
          font-size: inherit;
          color: inherit;
        }
        .toast--content--message_secondary {
          opacity: 0.9;
        }

        @media (min-width: 31.25rem) {
          .toaster {
            width: auto;
          }

          .toast {
            margin: 0 0 0 1.25rem;
            margin-bottom: 1.25rem;
            min-width: 18.75rem;
            max-width: 31.25rem;
            border-radius: 0.1875rem;
          }
        }
        .avatar {
          display: flex;
          align-items: center;
        }
        .avatar--image {
          width: 2.8125rem;
          height: 2.8125rem;
        }
        .avatar--image:not(.avatar--image_rounded) {
          border-radius: 50%;
        }
        .avatar--image_rounded {
          border-radius: 0.5rem;
        }
        .avatar--info {
          display: inline-block;
          margin-left: 0.75rem;
        }
        .avatar--title, .avatar--summary {
          margin: 0;
          font-weight: 500;
        }
        .avatar--title {
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
        }
        .avatar--summary {
          color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
        }
        .avatar--small {
          color: inherit;
          opacity: 0.7;
        }

        .border-0 {
          border-width: 0 !important;
          border-style: solid;
        }

        .border-top-0 {
          border-top-width: 0 !important;
          border-top-style: solid;
        }

        .border-right-0 {
          border-right-width: 0 !important;
          border-right-style: solid;
        }

        .border-bottom-0 {
          border-bottom-width: 0 !important;
          border-bottom-style: solid;
        }

        .border-left-0 {
          border-left-width: 0 !important;
          border-left-style: solid;
        }

        .border-sm {
          border-width: 1px !important;
          border-style: solid;
        }

        .border-top-sm {
          border-top-width: 1px !important;
          border-top-style: solid;
        }

        .border-right-sm {
          border-right-width: 1px !important;
          border-right-style: solid;
        }

        .border-bottom-sm {
          border-bottom-width: 1px !important;
          border-bottom-style: solid;
        }

        .border-left-sm {
          border-left-width: 1px !important;
          border-left-style: solid;
        }

        .border-md {
          border-width: 2px !important;
          border-style: solid;
        }

        .border-top-md {
          border-top-width: 2px !important;
          border-top-style: solid;
        }

        .border-right-md {
          border-right-width: 2px !important;
          border-right-style: solid;
        }

        .border-bottom-md {
          border-bottom-width: 2px !important;
          border-bottom-style: solid;
        }

        .border-left-md {
          border-left-width: 2px !important;
          border-left-style: solid;
        }

        .border-lg {
          border-width: 3px !important;
          border-style: solid;
        }

        .border-top-lg {
          border-top-width: 3px !important;
          border-top-style: solid;
        }

        .border-right-lg {
          border-right-width: 3px !important;
          border-right-style: solid;
        }

        .border-bottom-lg {
          border-bottom-width: 3px !important;
          border-bottom-style: solid;
        }

        .border-left-lg {
          border-left-width: 3px !important;
          border-left-style: solid;
        }

        .border-radius-0 {
          border-radius: 0 !important;
        }

        .border-radius-top-0,
        .border-radius-top-right-0 {
          border-top-right-radius: 0 !important;
        }

        .border-radius-top-0,
        .border-radius-top-left-0 {
          border-top-left-radius: 0 !important;
        }

        .border-radius-bottom-0,
        .border-radius-bottom-right-0 {
          border-bottom-right-radius: 0 !important;
        }

        .border-radius-bottom-0,
        .border-radius-bottom-left-0 {
          border-bottom-left-radius: 0 !important;
        }

        .border-radius-circle {
          border-radius: 50% !important;
        }

        .border-radius-sm {
          border-radius: 0.125rem !important;
        }

        .border-radius-md {
          border-radius: 0.3125rem !important;
        }

        .border-radius-lg {
          border-radius: 0.5rem !important;
        }

        .clearfix::after, .card::after, .card--action::after {
          content: "";
          display: block;
          clear: both;
        }

        .cursor-default {
          cursor: default;
        }

        .cursor-grab {
          cursor: -webkit-grab;
          cursor: grab;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .display-none {
          display: none !important;
        }

        .display-inline {
          display: inline !important;
        }

        .display-inline-block {
          display: inline-block !important;
        }

        .display-block {
          display: block !important;
        }

        .display-table {
          display: table !important;
        }

        .display-table-row {
          display: table-row !important;
        }

        .display-table-cell {
          display: table-cell !important;
        }

        .display-flex {
          display: flex !important;
        }

        .display-inline-flex {
          display: inline-flex !important;
        }

        @media (min-width: 576px) {
          .display-none__sm {
            display: none !important;
          }

          .display-inline__sm {
            display: inline !important;
          }

          .display-inline-block__sm {
            display: inline-block !important;
          }

          .display-block__sm {
            display: block !important;
          }

          .display-table__sm {
            display: table !important;
          }

          .display-table-row__sm {
            display: table-row !important;
          }

          .display-table-cell__sm {
            display: table-cell !important;
          }

          .display-flex__sm {
            display: flex !important;
          }

          .display-inline-flex__sm {
            display: inline-flex !important;
          }
        }
        @media (min-width: 768px) {
          .display-none__md {
            display: none !important;
          }

          .display-inline__md {
            display: inline !important;
          }

          .display-inline-block__md {
            display: inline-block !important;
          }

          .display-block__md {
            display: block !important;
          }

          .display-table__md {
            display: table !important;
          }

          .display-table-row__md {
            display: table-row !important;
          }

          .display-table-cell__md {
            display: table-cell !important;
          }

          .display-flex__md {
            display: flex !important;
          }

          .display-inline-flex__md {
            display: inline-flex !important;
          }
        }
        @media (min-width: 992px) {
          .display-none__lg {
            display: none !important;
          }

          .display-inline__lg {
            display: inline !important;
          }

          .display-inline-block__lg {
            display: inline-block !important;
          }

          .display-block__lg {
            display: block !important;
          }

          .display-table__lg {
            display: table !important;
          }

          .display-table-row__lg {
            display: table-row !important;
          }

          .display-table-cell__lg {
            display: table-cell !important;
          }

          .display-flex__lg {
            display: flex !important;
          }

          .display-inline-flex__lg {
            display: inline-flex !important;
          }
        }
        @media (min-width: 1200px) {
          .display-none__xl {
            display: none !important;
          }

          .display-inline__xl {
            display: inline !important;
          }

          .display-inline-block__xl {
            display: inline-block !important;
          }

          .display-block__xl {
            display: block !important;
          }

          .display-table__xl {
            display: table !important;
          }

          .display-table-row__xl {
            display: table-row !important;
          }

          .display-table-cell__xl {
            display: table-cell !important;
          }

          .display-flex__xl {
            display: flex !important;
          }

          .display-inline-flex__xl {
            display: inline-flex !important;
          }
        }
        .fixed-top {
          position: fixed;
          top: 0;
          right: 0;
          bottom: auto;
          left: 0;
        }

        .fixed-bottom {
          position: fixed;
          top: auto;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .flex-col-auto {
          width: auto;
          max-width: none;
          flex: 0 0 auto;
        }

        .flex-order-0 {
          order: 0;
        }

        .flex-col-1 {
          max-width: 8.3333333333%;
          flex: 0 0 8.3333333333%;
        }

        .flex-offset-1 {
          margin-left: 8.3333333333%;
        }

        .flex-order-1 {
          order: 1;
        }

        .flex-col-2 {
          max-width: 16.6666666667%;
          flex: 0 0 16.6666666667%;
        }

        .flex-offset-2 {
          margin-left: 16.6666666667%;
        }

        .flex-order-2 {
          order: 2;
        }

        .flex-col-3 {
          max-width: 25%;
          flex: 0 0 25%;
        }

        .flex-offset-3 {
          margin-left: 25%;
        }

        .flex-order-3 {
          order: 3;
        }

        .flex-col-4 {
          max-width: 33.3333333333%;
          flex: 0 0 33.3333333333%;
        }

        .flex-offset-4 {
          margin-left: 33.3333333333%;
        }

        .flex-order-4 {
          order: 4;
        }

        .flex-col-5 {
          max-width: 41.6666666667%;
          flex: 0 0 41.6666666667%;
        }

        .flex-offset-5 {
          margin-left: 41.6666666667%;
        }

        .flex-order-5 {
          order: 5;
        }

        .flex-col-6 {
          max-width: 50%;
          flex: 0 0 50%;
        }

        .flex-offset-6 {
          margin-left: 50%;
        }

        .flex-order-6 {
          order: 6;
        }

        .flex-col-7 {
          max-width: 58.3333333333%;
          flex: 0 0 58.3333333333%;
        }

        .flex-offset-7 {
          margin-left: 58.3333333333%;
        }

        .flex-order-7 {
          order: 7;
        }

        .flex-col-8 {
          max-width: 66.6666666667%;
          flex: 0 0 66.6666666667%;
        }

        .flex-offset-8 {
          margin-left: 66.6666666667%;
        }

        .flex-order-8 {
          order: 8;
        }

        .flex-col-9 {
          max-width: 75%;
          flex: 0 0 75%;
        }

        .flex-offset-9 {
          margin-left: 75%;
        }

        .flex-order-9 {
          order: 9;
        }

        .flex-col-10 {
          max-width: 83.3333333333%;
          flex: 0 0 83.3333333333%;
        }

        .flex-offset-10 {
          margin-left: 83.3333333333%;
        }

        .flex-order-10 {
          order: 10;
        }

        .flex-col-11 {
          max-width: 91.6666666667%;
          flex: 0 0 91.6666666667%;
        }

        .flex-offset-11 {
          margin-left: 91.6666666667%;
        }

        .flex-order-11 {
          order: 11;
        }

        .flex-col-12 {
          max-width: 100%;
          flex: 0 0 100%;
        }

        .flex-order-12 {
          order: 12;
        }

        @media (min-width: 576px) {
          .flex-col-auto__sm {
            width: auto;
            max-width: none;
            flex: 0 0 auto;
          }

          .flex-order-0__sm {
            order: 0;
          }

          .flex-col-1__sm {
            max-width: 8.3333333333%;
            flex: 0 0 8.3333333333%;
          }

          .flex-offset-1__sm {
            margin-left: 8.3333333333%;
          }

          .flex-order-1__sm {
            order: 1;
          }

          .flex-col-2__sm {
            max-width: 16.6666666667%;
            flex: 0 0 16.6666666667%;
          }

          .flex-offset-2__sm {
            margin-left: 16.6666666667%;
          }

          .flex-order-2__sm {
            order: 2;
          }

          .flex-col-3__sm {
            max-width: 25%;
            flex: 0 0 25%;
          }

          .flex-offset-3__sm {
            margin-left: 25%;
          }

          .flex-order-3__sm {
            order: 3;
          }

          .flex-col-4__sm {
            max-width: 33.3333333333%;
            flex: 0 0 33.3333333333%;
          }

          .flex-offset-4__sm {
            margin-left: 33.3333333333%;
          }

          .flex-order-4__sm {
            order: 4;
          }

          .flex-col-5__sm {
            max-width: 41.6666666667%;
            flex: 0 0 41.6666666667%;
          }

          .flex-offset-5__sm {
            margin-left: 41.6666666667%;
          }

          .flex-order-5__sm {
            order: 5;
          }

          .flex-col-6__sm {
            max-width: 50%;
            flex: 0 0 50%;
          }

          .flex-offset-6__sm {
            margin-left: 50%;
          }

          .flex-order-6__sm {
            order: 6;
          }

          .flex-col-7__sm {
            max-width: 58.3333333333%;
            flex: 0 0 58.3333333333%;
          }

          .flex-offset-7__sm {
            margin-left: 58.3333333333%;
          }

          .flex-order-7__sm {
            order: 7;
          }

          .flex-col-8__sm {
            max-width: 66.6666666667%;
            flex: 0 0 66.6666666667%;
          }

          .flex-offset-8__sm {
            margin-left: 66.6666666667%;
          }

          .flex-order-8__sm {
            order: 8;
          }

          .flex-col-9__sm {
            max-width: 75%;
            flex: 0 0 75%;
          }

          .flex-offset-9__sm {
            margin-left: 75%;
          }

          .flex-order-9__sm {
            order: 9;
          }

          .flex-col-10__sm {
            max-width: 83.3333333333%;
            flex: 0 0 83.3333333333%;
          }

          .flex-offset-10__sm {
            margin-left: 83.3333333333%;
          }

          .flex-order-10__sm {
            order: 10;
          }

          .flex-col-11__sm {
            max-width: 91.6666666667%;
            flex: 0 0 91.6666666667%;
          }

          .flex-offset-11__sm {
            margin-left: 91.6666666667%;
          }

          .flex-order-11__sm {
            order: 11;
          }

          .flex-col-12__sm {
            max-width: 100%;
            flex: 0 0 100%;
          }

          .flex-order-12__sm {
            order: 12;
          }
        }
        @media (min-width: 768px) {
          .flex-col-auto__md {
            width: auto;
            max-width: none;
            flex: 0 0 auto;
          }

          .flex-order-0__md {
            order: 0;
          }

          .flex-col-1__md {
            max-width: 8.3333333333%;
            flex: 0 0 8.3333333333%;
          }

          .flex-offset-1__md {
            margin-left: 8.3333333333%;
          }

          .flex-order-1__md {
            order: 1;
          }

          .flex-col-2__md {
            max-width: 16.6666666667%;
            flex: 0 0 16.6666666667%;
          }

          .flex-offset-2__md {
            margin-left: 16.6666666667%;
          }

          .flex-order-2__md {
            order: 2;
          }

          .flex-col-3__md {
            max-width: 25%;
            flex: 0 0 25%;
          }

          .flex-offset-3__md {
            margin-left: 25%;
          }

          .flex-order-3__md {
            order: 3;
          }

          .flex-col-4__md {
            max-width: 33.3333333333%;
            flex: 0 0 33.3333333333%;
          }

          .flex-offset-4__md {
            margin-left: 33.3333333333%;
          }

          .flex-order-4__md {
            order: 4;
          }

          .flex-col-5__md {
            max-width: 41.6666666667%;
            flex: 0 0 41.6666666667%;
          }

          .flex-offset-5__md {
            margin-left: 41.6666666667%;
          }

          .flex-order-5__md {
            order: 5;
          }

          .flex-col-6__md {
            max-width: 50%;
            flex: 0 0 50%;
          }

          .flex-offset-6__md {
            margin-left: 50%;
          }

          .flex-order-6__md {
            order: 6;
          }

          .flex-col-7__md {
            max-width: 58.3333333333%;
            flex: 0 0 58.3333333333%;
          }

          .flex-offset-7__md {
            margin-left: 58.3333333333%;
          }

          .flex-order-7__md {
            order: 7;
          }

          .flex-col-8__md {
            max-width: 66.6666666667%;
            flex: 0 0 66.6666666667%;
          }

          .flex-offset-8__md {
            margin-left: 66.6666666667%;
          }

          .flex-order-8__md {
            order: 8;
          }

          .flex-col-9__md {
            max-width: 75%;
            flex: 0 0 75%;
          }

          .flex-offset-9__md {
            margin-left: 75%;
          }

          .flex-order-9__md {
            order: 9;
          }

          .flex-col-10__md {
            max-width: 83.3333333333%;
            flex: 0 0 83.3333333333%;
          }

          .flex-offset-10__md {
            margin-left: 83.3333333333%;
          }

          .flex-order-10__md {
            order: 10;
          }

          .flex-col-11__md {
            max-width: 91.6666666667%;
            flex: 0 0 91.6666666667%;
          }

          .flex-offset-11__md {
            margin-left: 91.6666666667%;
          }

          .flex-order-11__md {
            order: 11;
          }

          .flex-col-12__md {
            max-width: 100%;
            flex: 0 0 100%;
          }

          .flex-order-12__md {
            order: 12;
          }
        }
        @media (min-width: 992px) {
          .flex-col-auto__lg {
            width: auto;
            max-width: none;
            flex: 0 0 auto;
          }

          .flex-order-0__lg {
            order: 0;
          }

          .flex-col-1__lg {
            max-width: 8.3333333333%;
            flex: 0 0 8.3333333333%;
          }

          .flex-offset-1__lg {
            margin-left: 8.3333333333%;
          }

          .flex-order-1__lg {
            order: 1;
          }

          .flex-col-2__lg {
            max-width: 16.6666666667%;
            flex: 0 0 16.6666666667%;
          }

          .flex-offset-2__lg {
            margin-left: 16.6666666667%;
          }

          .flex-order-2__lg {
            order: 2;
          }

          .flex-col-3__lg {
            max-width: 25%;
            flex: 0 0 25%;
          }

          .flex-offset-3__lg {
            margin-left: 25%;
          }

          .flex-order-3__lg {
            order: 3;
          }

          .flex-col-4__lg {
            max-width: 33.3333333333%;
            flex: 0 0 33.3333333333%;
          }

          .flex-offset-4__lg {
            margin-left: 33.3333333333%;
          }

          .flex-order-4__lg {
            order: 4;
          }

          .flex-col-5__lg {
            max-width: 41.6666666667%;
            flex: 0 0 41.6666666667%;
          }

          .flex-offset-5__lg {
            margin-left: 41.6666666667%;
          }

          .flex-order-5__lg {
            order: 5;
          }

          .flex-col-6__lg {
            max-width: 50%;
            flex: 0 0 50%;
          }

          .flex-offset-6__lg {
            margin-left: 50%;
          }

          .flex-order-6__lg {
            order: 6;
          }

          .flex-col-7__lg {
            max-width: 58.3333333333%;
            flex: 0 0 58.3333333333%;
          }

          .flex-offset-7__lg {
            margin-left: 58.3333333333%;
          }

          .flex-order-7__lg {
            order: 7;
          }

          .flex-col-8__lg {
            max-width: 66.6666666667%;
            flex: 0 0 66.6666666667%;
          }

          .flex-offset-8__lg {
            margin-left: 66.6666666667%;
          }

          .flex-order-8__lg {
            order: 8;
          }

          .flex-col-9__lg {
            max-width: 75%;
            flex: 0 0 75%;
          }

          .flex-offset-9__lg {
            margin-left: 75%;
          }

          .flex-order-9__lg {
            order: 9;
          }

          .flex-col-10__lg {
            max-width: 83.3333333333%;
            flex: 0 0 83.3333333333%;
          }

          .flex-offset-10__lg {
            margin-left: 83.3333333333%;
          }

          .flex-order-10__lg {
            order: 10;
          }

          .flex-col-11__lg {
            max-width: 91.6666666667%;
            flex: 0 0 91.6666666667%;
          }

          .flex-offset-11__lg {
            margin-left: 91.6666666667%;
          }

          .flex-order-11__lg {
            order: 11;
          }

          .flex-col-12__lg {
            max-width: 100%;
            flex: 0 0 100%;
          }

          .flex-order-12__lg {
            order: 12;
          }
        }
        @media (min-width: 1200px) {
          .flex-col-auto__xl {
            width: auto;
            max-width: none;
            flex: 0 0 auto;
          }

          .flex-order-0__xl {
            order: 0;
          }

          .flex-col-1__xl {
            max-width: 8.3333333333%;
            flex: 0 0 8.3333333333%;
          }

          .flex-offset-1__xl {
            margin-left: 8.3333333333%;
          }

          .flex-order-1__xl {
            order: 1;
          }

          .flex-col-2__xl {
            max-width: 16.6666666667%;
            flex: 0 0 16.6666666667%;
          }

          .flex-offset-2__xl {
            margin-left: 16.6666666667%;
          }

          .flex-order-2__xl {
            order: 2;
          }

          .flex-col-3__xl {
            max-width: 25%;
            flex: 0 0 25%;
          }

          .flex-offset-3__xl {
            margin-left: 25%;
          }

          .flex-order-3__xl {
            order: 3;
          }

          .flex-col-4__xl {
            max-width: 33.3333333333%;
            flex: 0 0 33.3333333333%;
          }

          .flex-offset-4__xl {
            margin-left: 33.3333333333%;
          }

          .flex-order-4__xl {
            order: 4;
          }

          .flex-col-5__xl {
            max-width: 41.6666666667%;
            flex: 0 0 41.6666666667%;
          }

          .flex-offset-5__xl {
            margin-left: 41.6666666667%;
          }

          .flex-order-5__xl {
            order: 5;
          }

          .flex-col-6__xl {
            max-width: 50%;
            flex: 0 0 50%;
          }

          .flex-offset-6__xl {
            margin-left: 50%;
          }

          .flex-order-6__xl {
            order: 6;
          }

          .flex-col-7__xl {
            max-width: 58.3333333333%;
            flex: 0 0 58.3333333333%;
          }

          .flex-offset-7__xl {
            margin-left: 58.3333333333%;
          }

          .flex-order-7__xl {
            order: 7;
          }

          .flex-col-8__xl {
            max-width: 66.6666666667%;
            flex: 0 0 66.6666666667%;
          }

          .flex-offset-8__xl {
            margin-left: 66.6666666667%;
          }

          .flex-order-8__xl {
            order: 8;
          }

          .flex-col-9__xl {
            max-width: 75%;
            flex: 0 0 75%;
          }

          .flex-offset-9__xl {
            margin-left: 75%;
          }

          .flex-order-9__xl {
            order: 9;
          }

          .flex-col-10__xl {
            max-width: 83.3333333333%;
            flex: 0 0 83.3333333333%;
          }

          .flex-offset-10__xl {
            margin-left: 83.3333333333%;
          }

          .flex-order-10__xl {
            order: 10;
          }

          .flex-col-11__xl {
            max-width: 91.6666666667%;
            flex: 0 0 91.6666666667%;
          }

          .flex-offset-11__xl {
            margin-left: 91.6666666667%;
          }

          .flex-order-11__xl {
            order: 11;
          }

          .flex-col-12__xl {
            max-width: 100%;
            flex: 0 0 100%;
          }

          .flex-order-12__xl {
            order: 12;
          }
        }
        .flex-dir-row {
          flex-direction: row;
        }

        .flex-dir-column {
          flex-direction: column;
        }

        .flex-dir-row-reverse {
          flex-direction: row-reverse;
        }

        .flex-dir-column-reverse {
          flex-direction: column-reverse;
        }

        .flex-content-start {
          justify-content: flex-start;
        }

        .flex-content-end {
          justify-content: flex-end;
        }

        .flex-content-center {
          justify-content: center;
        }

        .flex-content-around {
          justify-content: space-around;
        }

        .flex-content-between {
          justify-content: space-between;
        }

        .flex-items-start {
          align-items: flex-start;
        }

        .flex-items-end {
          align-items: flex-end;
        }

        .flex-items-center {
          align-items: center;
        }

        .flex-items-stretch {
          align-items: stretch;
        }

        .flex-items-baseline {
          align-items: baseline;
        }

        @media (min-width: 576px) {
          .flex-dir-row__sm {
            flex-direction: row;
          }

          .flex-dir-column__sm {
            flex-direction: column;
          }

          .flex-dir-row-reverse__sm {
            flex-direction: row-reverse;
          }

          .flex-dir-column-reverse__sm {
            flex-direction: column-reverse;
          }

          .flex-content-start__sm {
            justify-content: flex-start;
          }

          .flex-content-end__sm {
            justify-content: flex-end;
          }

          .flex-content-center__sm {
            justify-content: center;
          }

          .flex-content-around__sm {
            justify-content: space-around;
          }

          .flex-content-between__sm {
            justify-content: space-between;
          }

          .flex-items-start__sm {
            align-items: flex-start;
          }

          .flex-items-end__sm {
            align-items: flex-end;
          }

          .flex-items-center__sm {
            align-items: center;
          }

          .flex-items-stretch__sm {
            align-items: stretch;
          }

          .flex-items-baseline__sm {
            align-items: baseline;
          }
        }
        @media (min-width: 768px) {
          .flex-dir-row__md {
            flex-direction: row;
          }

          .flex-dir-column__md {
            flex-direction: column;
          }

          .flex-dir-row-reverse__md {
            flex-direction: row-reverse;
          }

          .flex-dir-column-reverse__md {
            flex-direction: column-reverse;
          }

          .flex-content-start__md {
            justify-content: flex-start;
          }

          .flex-content-end__md {
            justify-content: flex-end;
          }

          .flex-content-center__md {
            justify-content: center;
          }

          .flex-content-around__md {
            justify-content: space-around;
          }

          .flex-content-between__md {
            justify-content: space-between;
          }

          .flex-items-start__md {
            align-items: flex-start;
          }

          .flex-items-end__md {
            align-items: flex-end;
          }

          .flex-items-center__md {
            align-items: center;
          }

          .flex-items-stretch__md {
            align-items: stretch;
          }

          .flex-items-baseline__md {
            align-items: baseline;
          }
        }
        @media (min-width: 992px) {
          .flex-dir-row__lg {
            flex-direction: row;
          }

          .flex-dir-column__lg {
            flex-direction: column;
          }

          .flex-dir-row-reverse__lg {
            flex-direction: row-reverse;
          }

          .flex-dir-column-reverse__lg {
            flex-direction: column-reverse;
          }

          .flex-content-start__lg {
            justify-content: flex-start;
          }

          .flex-content-end__lg {
            justify-content: flex-end;
          }

          .flex-content-center__lg {
            justify-content: center;
          }

          .flex-content-around__lg {
            justify-content: space-around;
          }

          .flex-content-between__lg {
            justify-content: space-between;
          }

          .flex-items-start__lg {
            align-items: flex-start;
          }

          .flex-items-end__lg {
            align-items: flex-end;
          }

          .flex-items-center__lg {
            align-items: center;
          }

          .flex-items-stretch__lg {
            align-items: stretch;
          }

          .flex-items-baseline__lg {
            align-items: baseline;
          }
        }
        @media (min-width: 1200px) {
          .flex-dir-row__xl {
            flex-direction: row;
          }

          .flex-dir-column__xl {
            flex-direction: column;
          }

          .flex-dir-row-reverse__xl {
            flex-direction: row-reverse;
          }

          .flex-dir-column-reverse__xl {
            flex-direction: column-reverse;
          }

          .flex-content-start__xl {
            justify-content: flex-start;
          }

          .flex-content-end__xl {
            justify-content: flex-end;
          }

          .flex-content-center__xl {
            justify-content: center;
          }

          .flex-content-around__xl {
            justify-content: space-around;
          }

          .flex-content-between__xl {
            justify-content: space-between;
          }

          .flex-items-start__xl {
            align-items: flex-start;
          }

          .flex-items-end__xl {
            align-items: flex-end;
          }

          .flex-items-center__xl {
            align-items: center;
          }

          .flex-items-stretch__xl {
            align-items: stretch;
          }

          .flex-items-baseline__xl {
            align-items: baseline;
          }
        }
        .float-right {
          float: right !important;
        }

        .float-left {
          float: left !important;
        }

        .position-absolute {
          position: absolute !important;
        }

        .position-fixed {
          position: fixed !important;
        }

        .position-relative {
          position: relative !important;
        }

        .shadow-none {
          box-shadow: none !important;
        }

        .shadow-floating, .menu, .toast {
          box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0 0.25rem 0.3125rem 0 rgba(0, 0, 0, 0.14), 0 0.0625rem 0.625rem 0 rgba(0, 0, 0, 0.12);
        }

        .shadow-highlight, .navigation-drawer {
          box-shadow: 0 0.0625rem 0.3125rem rgba(0, 0, 0, 0.12);
        }

        .width-25 {
          width: 25% !important;
        }

        .width-50 {
          width: 50% !important;
        }

        .width-75 {
          width: 75% !important;
        }

        .width-100 {
          width: 100% !important;
        }

        .width-auto {
          width: auto !important;
        }

        .max-width-100 {
          max-width: 100% !important;
        }

        .height-25 {
          height: 25% !important;
        }

        .height-50 {
          height: 50% !important;
        }

        .height-75 {
          height: 75% !important;
        }

        .height-100 {
          height: 100% !important;
        }

        .height-auto {
          height: auto !important;
        }

        .max-height-100 {
          max-height: 100% !important;
        }

        .margin-0 {
          margin: 0 !important;
        }

        .margin-top-0,
        .margin-y-0 {
          margin-top: 0 !important;
        }

        .margin-right-0,
        .margin-x-0 {
          margin-right: 0 !important;
        }

        .margin-bottom-0,
        .margin-y-0 {
          margin-bottom: 0 !important;
        }

        .margin-left-0,
        .margin-x-0 {
          margin-left: 0 !important;
        }

        .padding-0 {
          padding: 0 !important;
        }

        .padding-top-0,
        .padding-y-0 {
          padding-top: 0 !important;
        }

        .padding-right-0,
        .padding-x-0 {
          padding-right: 0 !important;
        }

        .padding-bottom-0,
        .padding-y-0 {
          padding-bottom: 0 !important;
        }

        .padding-left-0,
        .padding-x-0 {
          padding-left: 0 !important;
        }

        .margin-xs {
          margin: 0.25rem !important;
        }

        .margin-top-xs,
        .margin-y-xs {
          margin-top: 0.25rem !important;
        }

        .margin-right-xs,
        .margin-x-xs {
          margin-right: 0.25rem !important;
        }

        .margin-bottom-xs,
        .margin-y-xs {
          margin-bottom: 0.25rem !important;
        }

        .margin-left-xs,
        .margin-x-xs {
          margin-left: 0.25rem !important;
        }

        .padding-xs {
          padding: 0.25rem !important;
        }

        .padding-top-xs,
        .padding-y-xs {
          padding-top: 0.25rem !important;
        }

        .padding-right-xs,
        .padding-x-xs {
          padding-right: 0.25rem !important;
        }

        .padding-bottom-xs,
        .padding-y-xs {
          padding-bottom: 0.25rem !important;
        }

        .padding-left-xs,
        .padding-x-xs {
          padding-left: 0.25rem !important;
        }

        .margin-sm {
          margin: 0.5rem !important;
        }

        .margin-top-sm,
        .margin-y-sm {
          margin-top: 0.5rem !important;
        }

        .margin-right-sm,
        .margin-x-sm {
          margin-right: 0.5rem !important;
        }

        .margin-bottom-sm,
        .margin-y-sm {
          margin-bottom: 0.5rem !important;
        }

        .margin-left-sm,
        .margin-x-sm {
          margin-left: 0.5rem !important;
        }

        .padding-sm {
          padding: 0.5rem !important;
        }

        .padding-top-sm,
        .padding-y-sm {
          padding-top: 0.5rem !important;
        }

        .padding-right-sm,
        .padding-x-sm {
          padding-right: 0.5rem !important;
        }

        .padding-bottom-sm,
        .padding-y-sm {
          padding-bottom: 0.5rem !important;
        }

        .padding-left-sm,
        .padding-x-sm {
          padding-left: 0.5rem !important;
        }

        .margin-md {
          margin: 1rem !important;
        }

        .margin-top-md,
        .margin-y-md {
          margin-top: 1rem !important;
        }

        .margin-right-md,
        .margin-x-md {
          margin-right: 1rem !important;
        }

        .margin-bottom-md,
        .margin-y-md {
          margin-bottom: 1rem !important;
        }

        .margin-left-md,
        .margin-x-md {
          margin-left: 1rem !important;
        }

        .padding-md {
          padding: 1rem !important;
        }

        .padding-top-md,
        .padding-y-md {
          padding-top: 1rem !important;
        }

        .padding-right-md,
        .padding-x-md {
          padding-right: 1rem !important;
        }

        .padding-bottom-md,
        .padding-y-md {
          padding-bottom: 1rem !important;
        }

        .padding-left-md,
        .padding-x-md {
          padding-left: 1rem !important;
        }

        .margin-lg {
          margin: 1.5rem !important;
        }

        .margin-top-lg,
        .margin-y-lg {
          margin-top: 1.5rem !important;
        }

        .margin-right-lg,
        .margin-x-lg {
          margin-right: 1.5rem !important;
        }

        .margin-bottom-lg,
        .margin-y-lg {
          margin-bottom: 1.5rem !important;
        }

        .margin-left-lg,
        .margin-x-lg {
          margin-left: 1.5rem !important;
        }

        .padding-lg {
          padding: 1.5rem !important;
        }

        .padding-top-lg,
        .padding-y-lg {
          padding-top: 1.5rem !important;
        }

        .padding-right-lg,
        .padding-x-lg {
          padding-right: 1.5rem !important;
        }

        .padding-bottom-lg,
        .padding-y-lg {
          padding-bottom: 1.5rem !important;
        }

        .padding-left-lg,
        .padding-x-lg {
          padding-left: 1.5rem !important;
        }

        .margin-xl {
          margin: 3rem !important;
        }

        .margin-top-xl,
        .margin-y-xl {
          margin-top: 3rem !important;
        }

        .margin-right-xl,
        .margin-x-xl {
          margin-right: 3rem !important;
        }

        .margin-bottom-xl,
        .margin-y-xl {
          margin-bottom: 3rem !important;
        }

        .margin-left-xl,
        .margin-x-xl {
          margin-left: 3rem !important;
        }

        .padding-xl {
          padding: 3rem !important;
        }

        .padding-top-xl,
        .padding-y-xl {
          padding-top: 3rem !important;
        }

        .padding-right-xl,
        .padding-x-xl {
          padding-right: 3rem !important;
        }

        .padding-bottom-xl,
        .padding-y-xl {
          padding-bottom: 3rem !important;
        }

        .padding-left-xl,
        .padding-x-xl {
          padding-left: 3rem !important;
        }

        .margin-auto {
          margin: auto !important;
        }

        .margin-top-auto,
        .margin-y-auto {
          margin-top: auto !important;
        }

        .margin-right-auto,
        .margin-x-auto {
          margin-right: auto !important;
        }

        .margin-bottom-auto,
        .margin-y-auto {
          margin-bottom: auto !important;
        }

        .margin-left-auto,
        .margin-x-auto {
          margin-left: auto !important;
        }

        .margin-init {
          margin: initial !important;
        }

        .margin-top-init,
        .margin-y-init {
          margin-top: initial !important;
        }

        .margin-right-init,
        .margin-x-init {
          margin-right: initial !important;
        }

        .margin-bottom-init,
        .margin-y-init {
          margin-bottom: initial !important;
        }

        .margin-left-init,
        .margin-x-init {
          margin-left: initial !important;
        }

        .padding-init {
          padding: initial !important;
        }

        .padding-top-init,
        .padding-y-init {
          padding-top: initial !important;
        }

        .padding-right-init,
        .padding-x-init {
          padding-right: initial !important;
        }

        .padding-bottom-init,
        .padding-y-init {
          padding-bottom: initial !important;
        }

        .padding-left-init,
        .padding-x-init {
          padding-left: initial !important;
        }

        @media (min-width: 576px) {
          .margin-0__sm {
            margin: 0 !important;
          }

          .margin-top-0__sm,
        .margin-y-0__sm {
            margin-top: 0 !important;
          }

          .margin-right-0__sm,
        .margin-x-0__sm {
            margin-right: 0 !important;
          }

          .margin-bottom-0__sm,
        .margin-y-0__sm {
            margin-bottom: 0 !important;
          }

          .margin-left-0__sm,
        .margin-x-0__sm {
            margin-left: 0 !important;
          }

          .padding-0__sm {
            padding: 0 !important;
          }

          .padding-top-0__sm,
        .padding-y-0__sm {
            padding-top: 0 !important;
          }

          .padding-right-0__sm,
        .padding-x-0__sm {
            padding-right: 0 !important;
          }

          .padding-bottom-0__sm,
        .padding-y-0__sm {
            padding-bottom: 0 !important;
          }

          .padding-left-0__sm,
        .padding-x-0__sm {
            padding-left: 0 !important;
          }

          .margin-xs__sm {
            margin: 0.25rem !important;
          }

          .margin-top-xs__sm,
        .margin-y-xs__sm {
            margin-top: 0.25rem !important;
          }

          .margin-right-xs__sm,
        .margin-x-xs__sm {
            margin-right: 0.25rem !important;
          }

          .margin-bottom-xs__sm,
        .margin-y-xs__sm {
            margin-bottom: 0.25rem !important;
          }

          .margin-left-xs__sm,
        .margin-x-xs__sm {
            margin-left: 0.25rem !important;
          }

          .padding-xs__sm {
            padding: 0.25rem !important;
          }

          .padding-top-xs__sm,
        .padding-y-xs__sm {
            padding-top: 0.25rem !important;
          }

          .padding-right-xs__sm,
        .padding-x-xs__sm {
            padding-right: 0.25rem !important;
          }

          .padding-bottom-xs__sm,
        .padding-y-xs__sm {
            padding-bottom: 0.25rem !important;
          }

          .padding-left-xs__sm,
        .padding-x-xs__sm {
            padding-left: 0.25rem !important;
          }

          .margin-sm__sm {
            margin: 0.5rem !important;
          }

          .margin-top-sm__sm,
        .margin-y-sm__sm {
            margin-top: 0.5rem !important;
          }

          .margin-right-sm__sm,
        .margin-x-sm__sm {
            margin-right: 0.5rem !important;
          }

          .margin-bottom-sm__sm,
        .margin-y-sm__sm {
            margin-bottom: 0.5rem !important;
          }

          .margin-left-sm__sm,
        .margin-x-sm__sm {
            margin-left: 0.5rem !important;
          }

          .padding-sm__sm {
            padding: 0.5rem !important;
          }

          .padding-top-sm__sm,
        .padding-y-sm__sm {
            padding-top: 0.5rem !important;
          }

          .padding-right-sm__sm,
        .padding-x-sm__sm {
            padding-right: 0.5rem !important;
          }

          .padding-bottom-sm__sm,
        .padding-y-sm__sm {
            padding-bottom: 0.5rem !important;
          }

          .padding-left-sm__sm,
        .padding-x-sm__sm {
            padding-left: 0.5rem !important;
          }

          .margin-md__sm {
            margin: 1rem !important;
          }

          .margin-top-md__sm,
        .margin-y-md__sm {
            margin-top: 1rem !important;
          }

          .margin-right-md__sm,
        .margin-x-md__sm {
            margin-right: 1rem !important;
          }

          .margin-bottom-md__sm,
        .margin-y-md__sm {
            margin-bottom: 1rem !important;
          }

          .margin-left-md__sm,
        .margin-x-md__sm {
            margin-left: 1rem !important;
          }

          .padding-md__sm {
            padding: 1rem !important;
          }

          .padding-top-md__sm,
        .padding-y-md__sm {
            padding-top: 1rem !important;
          }

          .padding-right-md__sm,
        .padding-x-md__sm {
            padding-right: 1rem !important;
          }

          .padding-bottom-md__sm,
        .padding-y-md__sm {
            padding-bottom: 1rem !important;
          }

          .padding-left-md__sm,
        .padding-x-md__sm {
            padding-left: 1rem !important;
          }

          .margin-lg__sm {
            margin: 1.5rem !important;
          }

          .margin-top-lg__sm,
        .margin-y-lg__sm {
            margin-top: 1.5rem !important;
          }

          .margin-right-lg__sm,
        .margin-x-lg__sm {
            margin-right: 1.5rem !important;
          }

          .margin-bottom-lg__sm,
        .margin-y-lg__sm {
            margin-bottom: 1.5rem !important;
          }

          .margin-left-lg__sm,
        .margin-x-lg__sm {
            margin-left: 1.5rem !important;
          }

          .padding-lg__sm {
            padding: 1.5rem !important;
          }

          .padding-top-lg__sm,
        .padding-y-lg__sm {
            padding-top: 1.5rem !important;
          }

          .padding-right-lg__sm,
        .padding-x-lg__sm {
            padding-right: 1.5rem !important;
          }

          .padding-bottom-lg__sm,
        .padding-y-lg__sm {
            padding-bottom: 1.5rem !important;
          }

          .padding-left-lg__sm,
        .padding-x-lg__sm {
            padding-left: 1.5rem !important;
          }

          .margin-xl__sm {
            margin: 3rem !important;
          }

          .margin-top-xl__sm,
        .margin-y-xl__sm {
            margin-top: 3rem !important;
          }

          .margin-right-xl__sm,
        .margin-x-xl__sm {
            margin-right: 3rem !important;
          }

          .margin-bottom-xl__sm,
        .margin-y-xl__sm {
            margin-bottom: 3rem !important;
          }

          .margin-left-xl__sm,
        .margin-x-xl__sm {
            margin-left: 3rem !important;
          }

          .padding-xl__sm {
            padding: 3rem !important;
          }

          .padding-top-xl__sm,
        .padding-y-xl__sm {
            padding-top: 3rem !important;
          }

          .padding-right-xl__sm,
        .padding-x-xl__sm {
            padding-right: 3rem !important;
          }

          .padding-bottom-xl__sm,
        .padding-y-xl__sm {
            padding-bottom: 3rem !important;
          }

          .padding-left-xl__sm,
        .padding-x-xl__sm {
            padding-left: 3rem !important;
          }

          .margin-auto__sm {
            margin: auto !important;
          }

          .margin-top-auto__sm,
        .margin-y-auto__sm {
            margin-top: auto !important;
          }

          .margin-right-auto__sm,
        .margin-x-auto__sm {
            margin-right: auto !important;
          }

          .margin-bottom-auto__sm,
        .margin-y-auto__sm {
            margin-bottom: auto !important;
          }

          .margin-left-auto__sm,
        .margin-x-auto__sm {
            margin-left: auto !important;
          }

          .margin-init__sm {
            margin: initial !important;
          }

          .margin-top-init__sm,
        .margin-y-init__sm {
            margin-top: initial !important;
          }

          .margin-right-init__sm,
        .margin-x-init__sm {
            margin-right: initial !important;
          }

          .margin-bottom-init__sm,
        .margin-y-init__sm {
            margin-bottom: initial !important;
          }

          .margin-left-init__sm,
        .margin-x-init__sm {
            margin-left: initial !important;
          }

          .padding-init__sm {
            padding: initial !important;
          }

          .padding-top-init__sm,
        .padding-y-init__sm {
            padding-top: initial !important;
          }

          .padding-right-init__sm,
        .padding-x-init__sm {
            padding-right: initial !important;
          }

          .padding-bottom-init__sm,
        .padding-y-init__sm {
            padding-bottom: initial !important;
          }

          .padding-left-init__sm,
        .padding-x-init__sm {
            padding-left: initial !important;
          }
        }
        @media (min-width: 768px) {
          .margin-0__md {
            margin: 0 !important;
          }

          .margin-top-0__md,
        .margin-y-0__md {
            margin-top: 0 !important;
          }

          .margin-right-0__md,
        .margin-x-0__md {
            margin-right: 0 !important;
          }

          .margin-bottom-0__md,
        .margin-y-0__md {
            margin-bottom: 0 !important;
          }

          .margin-left-0__md,
        .margin-x-0__md {
            margin-left: 0 !important;
          }

          .padding-0__md {
            padding: 0 !important;
          }

          .padding-top-0__md,
        .padding-y-0__md {
            padding-top: 0 !important;
          }

          .padding-right-0__md,
        .padding-x-0__md {
            padding-right: 0 !important;
          }

          .padding-bottom-0__md,
        .padding-y-0__md {
            padding-bottom: 0 !important;
          }

          .padding-left-0__md,
        .padding-x-0__md {
            padding-left: 0 !important;
          }

          .margin-xs__md {
            margin: 0.25rem !important;
          }

          .margin-top-xs__md,
        .margin-y-xs__md {
            margin-top: 0.25rem !important;
          }

          .margin-right-xs__md,
        .margin-x-xs__md {
            margin-right: 0.25rem !important;
          }

          .margin-bottom-xs__md,
        .margin-y-xs__md {
            margin-bottom: 0.25rem !important;
          }

          .margin-left-xs__md,
        .margin-x-xs__md {
            margin-left: 0.25rem !important;
          }

          .padding-xs__md {
            padding: 0.25rem !important;
          }

          .padding-top-xs__md,
        .padding-y-xs__md {
            padding-top: 0.25rem !important;
          }

          .padding-right-xs__md,
        .padding-x-xs__md {
            padding-right: 0.25rem !important;
          }

          .padding-bottom-xs__md,
        .padding-y-xs__md {
            padding-bottom: 0.25rem !important;
          }

          .padding-left-xs__md,
        .padding-x-xs__md {
            padding-left: 0.25rem !important;
          }

          .margin-sm__md {
            margin: 0.5rem !important;
          }

          .margin-top-sm__md,
        .margin-y-sm__md {
            margin-top: 0.5rem !important;
          }

          .margin-right-sm__md,
        .margin-x-sm__md {
            margin-right: 0.5rem !important;
          }

          .margin-bottom-sm__md,
        .margin-y-sm__md {
            margin-bottom: 0.5rem !important;
          }

          .margin-left-sm__md,
        .margin-x-sm__md {
            margin-left: 0.5rem !important;
          }

          .padding-sm__md {
            padding: 0.5rem !important;
          }

          .padding-top-sm__md,
        .padding-y-sm__md {
            padding-top: 0.5rem !important;
          }

          .padding-right-sm__md,
        .padding-x-sm__md {
            padding-right: 0.5rem !important;
          }

          .padding-bottom-sm__md,
        .padding-y-sm__md {
            padding-bottom: 0.5rem !important;
          }

          .padding-left-sm__md,
        .padding-x-sm__md {
            padding-left: 0.5rem !important;
          }

          .margin-md__md {
            margin: 1rem !important;
          }

          .margin-top-md__md,
        .margin-y-md__md {
            margin-top: 1rem !important;
          }

          .margin-right-md__md,
        .margin-x-md__md {
            margin-right: 1rem !important;
          }

          .margin-bottom-md__md,
        .margin-y-md__md {
            margin-bottom: 1rem !important;
          }

          .margin-left-md__md,
        .margin-x-md__md {
            margin-left: 1rem !important;
          }

          .padding-md__md {
            padding: 1rem !important;
          }

          .padding-top-md__md,
        .padding-y-md__md {
            padding-top: 1rem !important;
          }

          .padding-right-md__md,
        .padding-x-md__md {
            padding-right: 1rem !important;
          }

          .padding-bottom-md__md,
        .padding-y-md__md {
            padding-bottom: 1rem !important;
          }

          .padding-left-md__md,
        .padding-x-md__md {
            padding-left: 1rem !important;
          }

          .margin-lg__md {
            margin: 1.5rem !important;
          }

          .margin-top-lg__md,
        .margin-y-lg__md {
            margin-top: 1.5rem !important;
          }

          .margin-right-lg__md,
        .margin-x-lg__md {
            margin-right: 1.5rem !important;
          }

          .margin-bottom-lg__md,
        .margin-y-lg__md {
            margin-bottom: 1.5rem !important;
          }

          .margin-left-lg__md,
        .margin-x-lg__md {
            margin-left: 1.5rem !important;
          }

          .padding-lg__md {
            padding: 1.5rem !important;
          }

          .padding-top-lg__md,
        .padding-y-lg__md {
            padding-top: 1.5rem !important;
          }

          .padding-right-lg__md,
        .padding-x-lg__md {
            padding-right: 1.5rem !important;
          }

          .padding-bottom-lg__md,
        .padding-y-lg__md {
            padding-bottom: 1.5rem !important;
          }

          .padding-left-lg__md,
        .padding-x-lg__md {
            padding-left: 1.5rem !important;
          }

          .margin-xl__md {
            margin: 3rem !important;
          }

          .margin-top-xl__md,
        .margin-y-xl__md {
            margin-top: 3rem !important;
          }

          .margin-right-xl__md,
        .margin-x-xl__md {
            margin-right: 3rem !important;
          }

          .margin-bottom-xl__md,
        .margin-y-xl__md {
            margin-bottom: 3rem !important;
          }

          .margin-left-xl__md,
        .margin-x-xl__md {
            margin-left: 3rem !important;
          }

          .padding-xl__md {
            padding: 3rem !important;
          }

          .padding-top-xl__md,
        .padding-y-xl__md {
            padding-top: 3rem !important;
          }

          .padding-right-xl__md,
        .padding-x-xl__md {
            padding-right: 3rem !important;
          }

          .padding-bottom-xl__md,
        .padding-y-xl__md {
            padding-bottom: 3rem !important;
          }

          .padding-left-xl__md,
        .padding-x-xl__md {
            padding-left: 3rem !important;
          }

          .margin-auto__md {
            margin: auto !important;
          }

          .margin-top-auto__md,
        .margin-y-auto__md {
            margin-top: auto !important;
          }

          .margin-right-auto__md,
        .margin-x-auto__md {
            margin-right: auto !important;
          }

          .margin-bottom-auto__md,
        .margin-y-auto__md {
            margin-bottom: auto !important;
          }

          .margin-left-auto__md,
        .margin-x-auto__md {
            margin-left: auto !important;
          }

          .margin-init__md {
            margin: initial !important;
          }

          .margin-top-init__md,
        .margin-y-init__md {
            margin-top: initial !important;
          }

          .margin-right-init__md,
        .margin-x-init__md {
            margin-right: initial !important;
          }

          .margin-bottom-init__md,
        .margin-y-init__md {
            margin-bottom: initial !important;
          }

          .margin-left-init__md,
        .margin-x-init__md {
            margin-left: initial !important;
          }

          .padding-init__md {
            padding: initial !important;
          }

          .padding-top-init__md,
        .padding-y-init__md {
            padding-top: initial !important;
          }

          .padding-right-init__md,
        .padding-x-init__md {
            padding-right: initial !important;
          }

          .padding-bottom-init__md,
        .padding-y-init__md {
            padding-bottom: initial !important;
          }

          .padding-left-init__md,
        .padding-x-init__md {
            padding-left: initial !important;
          }
        }
        @media (min-width: 992px) {
          .margin-0__lg {
            margin: 0 !important;
          }

          .margin-top-0__lg,
        .margin-y-0__lg {
            margin-top: 0 !important;
          }

          .margin-right-0__lg,
        .margin-x-0__lg {
            margin-right: 0 !important;
          }

          .margin-bottom-0__lg,
        .margin-y-0__lg {
            margin-bottom: 0 !important;
          }

          .margin-left-0__lg,
        .margin-x-0__lg {
            margin-left: 0 !important;
          }

          .padding-0__lg {
            padding: 0 !important;
          }

          .padding-top-0__lg,
        .padding-y-0__lg {
            padding-top: 0 !important;
          }

          .padding-right-0__lg,
        .padding-x-0__lg {
            padding-right: 0 !important;
          }

          .padding-bottom-0__lg,
        .padding-y-0__lg {
            padding-bottom: 0 !important;
          }

          .padding-left-0__lg,
        .padding-x-0__lg {
            padding-left: 0 !important;
          }

          .margin-xs__lg {
            margin: 0.25rem !important;
          }

          .margin-top-xs__lg,
        .margin-y-xs__lg {
            margin-top: 0.25rem !important;
          }

          .margin-right-xs__lg,
        .margin-x-xs__lg {
            margin-right: 0.25rem !important;
          }

          .margin-bottom-xs__lg,
        .margin-y-xs__lg {
            margin-bottom: 0.25rem !important;
          }

          .margin-left-xs__lg,
        .margin-x-xs__lg {
            margin-left: 0.25rem !important;
          }

          .padding-xs__lg {
            padding: 0.25rem !important;
          }

          .padding-top-xs__lg,
        .padding-y-xs__lg {
            padding-top: 0.25rem !important;
          }

          .padding-right-xs__lg,
        .padding-x-xs__lg {
            padding-right: 0.25rem !important;
          }

          .padding-bottom-xs__lg,
        .padding-y-xs__lg {
            padding-bottom: 0.25rem !important;
          }

          .padding-left-xs__lg,
        .padding-x-xs__lg {
            padding-left: 0.25rem !important;
          }

          .margin-sm__lg {
            margin: 0.5rem !important;
          }

          .margin-top-sm__lg,
        .margin-y-sm__lg {
            margin-top: 0.5rem !important;
          }

          .margin-right-sm__lg,
        .margin-x-sm__lg {
            margin-right: 0.5rem !important;
          }

          .margin-bottom-sm__lg,
        .margin-y-sm__lg {
            margin-bottom: 0.5rem !important;
          }

          .margin-left-sm__lg,
        .margin-x-sm__lg {
            margin-left: 0.5rem !important;
          }

          .padding-sm__lg {
            padding: 0.5rem !important;
          }

          .padding-top-sm__lg,
        .padding-y-sm__lg {
            padding-top: 0.5rem !important;
          }

          .padding-right-sm__lg,
        .padding-x-sm__lg {
            padding-right: 0.5rem !important;
          }

          .padding-bottom-sm__lg,
        .padding-y-sm__lg {
            padding-bottom: 0.5rem !important;
          }

          .padding-left-sm__lg,
        .padding-x-sm__lg {
            padding-left: 0.5rem !important;
          }

          .margin-md__lg {
            margin: 1rem !important;
          }

          .margin-top-md__lg,
        .margin-y-md__lg {
            margin-top: 1rem !important;
          }

          .margin-right-md__lg,
        .margin-x-md__lg {
            margin-right: 1rem !important;
          }

          .margin-bottom-md__lg,
        .margin-y-md__lg {
            margin-bottom: 1rem !important;
          }

          .margin-left-md__lg,
        .margin-x-md__lg {
            margin-left: 1rem !important;
          }

          .padding-md__lg {
            padding: 1rem !important;
          }

          .padding-top-md__lg,
        .padding-y-md__lg {
            padding-top: 1rem !important;
          }

          .padding-right-md__lg,
        .padding-x-md__lg {
            padding-right: 1rem !important;
          }

          .padding-bottom-md__lg,
        .padding-y-md__lg {
            padding-bottom: 1rem !important;
          }

          .padding-left-md__lg,
        .padding-x-md__lg {
            padding-left: 1rem !important;
          }

          .margin-lg__lg {
            margin: 1.5rem !important;
          }

          .margin-top-lg__lg,
        .margin-y-lg__lg {
            margin-top: 1.5rem !important;
          }

          .margin-right-lg__lg,
        .margin-x-lg__lg {
            margin-right: 1.5rem !important;
          }

          .margin-bottom-lg__lg,
        .margin-y-lg__lg {
            margin-bottom: 1.5rem !important;
          }

          .margin-left-lg__lg,
        .margin-x-lg__lg {
            margin-left: 1.5rem !important;
          }

          .padding-lg__lg {
            padding: 1.5rem !important;
          }

          .padding-top-lg__lg,
        .padding-y-lg__lg {
            padding-top: 1.5rem !important;
          }

          .padding-right-lg__lg,
        .padding-x-lg__lg {
            padding-right: 1.5rem !important;
          }

          .padding-bottom-lg__lg,
        .padding-y-lg__lg {
            padding-bottom: 1.5rem !important;
          }

          .padding-left-lg__lg,
        .padding-x-lg__lg {
            padding-left: 1.5rem !important;
          }

          .margin-xl__lg {
            margin: 3rem !important;
          }

          .margin-top-xl__lg,
        .margin-y-xl__lg {
            margin-top: 3rem !important;
          }

          .margin-right-xl__lg,
        .margin-x-xl__lg {
            margin-right: 3rem !important;
          }

          .margin-bottom-xl__lg,
        .margin-y-xl__lg {
            margin-bottom: 3rem !important;
          }

          .margin-left-xl__lg,
        .margin-x-xl__lg {
            margin-left: 3rem !important;
          }

          .padding-xl__lg {
            padding: 3rem !important;
          }

          .padding-top-xl__lg,
        .padding-y-xl__lg {
            padding-top: 3rem !important;
          }

          .padding-right-xl__lg,
        .padding-x-xl__lg {
            padding-right: 3rem !important;
          }

          .padding-bottom-xl__lg,
        .padding-y-xl__lg {
            padding-bottom: 3rem !important;
          }

          .padding-left-xl__lg,
        .padding-x-xl__lg {
            padding-left: 3rem !important;
          }

          .margin-auto__lg {
            margin: auto !important;
          }

          .margin-top-auto__lg,
        .margin-y-auto__lg {
            margin-top: auto !important;
          }

          .margin-right-auto__lg,
        .margin-x-auto__lg {
            margin-right: auto !important;
          }

          .margin-bottom-auto__lg,
        .margin-y-auto__lg {
            margin-bottom: auto !important;
          }

          .margin-left-auto__lg,
        .margin-x-auto__lg {
            margin-left: auto !important;
          }

          .margin-init__lg {
            margin: initial !important;
          }

          .margin-top-init__lg,
        .margin-y-init__lg {
            margin-top: initial !important;
          }

          .margin-right-init__lg,
        .margin-x-init__lg {
            margin-right: initial !important;
          }

          .margin-bottom-init__lg,
        .margin-y-init__lg {
            margin-bottom: initial !important;
          }

          .margin-left-init__lg,
        .margin-x-init__lg {
            margin-left: initial !important;
          }

          .padding-init__lg {
            padding: initial !important;
          }

          .padding-top-init__lg,
        .padding-y-init__lg {
            padding-top: initial !important;
          }

          .padding-right-init__lg,
        .padding-x-init__lg {
            padding-right: initial !important;
          }

          .padding-bottom-init__lg,
        .padding-y-init__lg {
            padding-bottom: initial !important;
          }

          .padding-left-init__lg,
        .padding-x-init__lg {
            padding-left: initial !important;
          }
        }
        @media (min-width: 1200px) {
          .margin-0__xl {
            margin: 0 !important;
          }

          .margin-top-0__xl,
        .margin-y-0__xl {
            margin-top: 0 !important;
          }

          .margin-right-0__xl,
        .margin-x-0__xl {
            margin-right: 0 !important;
          }

          .margin-bottom-0__xl,
        .margin-y-0__xl {
            margin-bottom: 0 !important;
          }

          .margin-left-0__xl,
        .margin-x-0__xl {
            margin-left: 0 !important;
          }

          .padding-0__xl {
            padding: 0 !important;
          }

          .padding-top-0__xl,
        .padding-y-0__xl {
            padding-top: 0 !important;
          }

          .padding-right-0__xl,
        .padding-x-0__xl {
            padding-right: 0 !important;
          }

          .padding-bottom-0__xl,
        .padding-y-0__xl {
            padding-bottom: 0 !important;
          }

          .padding-left-0__xl,
        .padding-x-0__xl {
            padding-left: 0 !important;
          }

          .margin-xs__xl {
            margin: 0.25rem !important;
          }

          .margin-top-xs__xl,
        .margin-y-xs__xl {
            margin-top: 0.25rem !important;
          }

          .margin-right-xs__xl,
        .margin-x-xs__xl {
            margin-right: 0.25rem !important;
          }

          .margin-bottom-xs__xl,
        .margin-y-xs__xl {
            margin-bottom: 0.25rem !important;
          }

          .margin-left-xs__xl,
        .margin-x-xs__xl {
            margin-left: 0.25rem !important;
          }

          .padding-xs__xl {
            padding: 0.25rem !important;
          }

          .padding-top-xs__xl,
        .padding-y-xs__xl {
            padding-top: 0.25rem !important;
          }

          .padding-right-xs__xl,
        .padding-x-xs__xl {
            padding-right: 0.25rem !important;
          }

          .padding-bottom-xs__xl,
        .padding-y-xs__xl {
            padding-bottom: 0.25rem !important;
          }

          .padding-left-xs__xl,
        .padding-x-xs__xl {
            padding-left: 0.25rem !important;
          }

          .margin-sm__xl {
            margin: 0.5rem !important;
          }

          .margin-top-sm__xl,
        .margin-y-sm__xl {
            margin-top: 0.5rem !important;
          }

          .margin-right-sm__xl,
        .margin-x-sm__xl {
            margin-right: 0.5rem !important;
          }

          .margin-bottom-sm__xl,
        .margin-y-sm__xl {
            margin-bottom: 0.5rem !important;
          }

          .margin-left-sm__xl,
        .margin-x-sm__xl {
            margin-left: 0.5rem !important;
          }

          .padding-sm__xl {
            padding: 0.5rem !important;
          }

          .padding-top-sm__xl,
        .padding-y-sm__xl {
            padding-top: 0.5rem !important;
          }

          .padding-right-sm__xl,
        .padding-x-sm__xl {
            padding-right: 0.5rem !important;
          }

          .padding-bottom-sm__xl,
        .padding-y-sm__xl {
            padding-bottom: 0.5rem !important;
          }

          .padding-left-sm__xl,
        .padding-x-sm__xl {
            padding-left: 0.5rem !important;
          }

          .margin-md__xl {
            margin: 1rem !important;
          }

          .margin-top-md__xl,
        .margin-y-md__xl {
            margin-top: 1rem !important;
          }

          .margin-right-md__xl,
        .margin-x-md__xl {
            margin-right: 1rem !important;
          }

          .margin-bottom-md__xl,
        .margin-y-md__xl {
            margin-bottom: 1rem !important;
          }

          .margin-left-md__xl,
        .margin-x-md__xl {
            margin-left: 1rem !important;
          }

          .padding-md__xl {
            padding: 1rem !important;
          }

          .padding-top-md__xl,
        .padding-y-md__xl {
            padding-top: 1rem !important;
          }

          .padding-right-md__xl,
        .padding-x-md__xl {
            padding-right: 1rem !important;
          }

          .padding-bottom-md__xl,
        .padding-y-md__xl {
            padding-bottom: 1rem !important;
          }

          .padding-left-md__xl,
        .padding-x-md__xl {
            padding-left: 1rem !important;
          }

          .margin-lg__xl {
            margin: 1.5rem !important;
          }

          .margin-top-lg__xl,
        .margin-y-lg__xl {
            margin-top: 1.5rem !important;
          }

          .margin-right-lg__xl,
        .margin-x-lg__xl {
            margin-right: 1.5rem !important;
          }

          .margin-bottom-lg__xl,
        .margin-y-lg__xl {
            margin-bottom: 1.5rem !important;
          }

          .margin-left-lg__xl,
        .margin-x-lg__xl {
            margin-left: 1.5rem !important;
          }

          .padding-lg__xl {
            padding: 1.5rem !important;
          }

          .padding-top-lg__xl,
        .padding-y-lg__xl {
            padding-top: 1.5rem !important;
          }

          .padding-right-lg__xl,
        .padding-x-lg__xl {
            padding-right: 1.5rem !important;
          }

          .padding-bottom-lg__xl,
        .padding-y-lg__xl {
            padding-bottom: 1.5rem !important;
          }

          .padding-left-lg__xl,
        .padding-x-lg__xl {
            padding-left: 1.5rem !important;
          }

          .margin-xl__xl {
            margin: 3rem !important;
          }

          .margin-top-xl__xl,
        .margin-y-xl__xl {
            margin-top: 3rem !important;
          }

          .margin-right-xl__xl,
        .margin-x-xl__xl {
            margin-right: 3rem !important;
          }

          .margin-bottom-xl__xl,
        .margin-y-xl__xl {
            margin-bottom: 3rem !important;
          }

          .margin-left-xl__xl,
        .margin-x-xl__xl {
            margin-left: 3rem !important;
          }

          .padding-xl__xl {
            padding: 3rem !important;
          }

          .padding-top-xl__xl,
        .padding-y-xl__xl {
            padding-top: 3rem !important;
          }

          .padding-right-xl__xl,
        .padding-x-xl__xl {
            padding-right: 3rem !important;
          }

          .padding-bottom-xl__xl,
        .padding-y-xl__xl {
            padding-bottom: 3rem !important;
          }

          .padding-left-xl__xl,
        .padding-x-xl__xl {
            padding-left: 3rem !important;
          }

          .margin-auto__xl {
            margin: auto !important;
          }

          .margin-top-auto__xl,
        .margin-y-auto__xl {
            margin-top: auto !important;
          }

          .margin-right-auto__xl,
        .margin-x-auto__xl {
            margin-right: auto !important;
          }

          .margin-bottom-auto__xl,
        .margin-y-auto__xl {
            margin-bottom: auto !important;
          }

          .margin-left-auto__xl,
        .margin-x-auto__xl {
            margin-left: auto !important;
          }

          .margin-init__xl {
            margin: initial !important;
          }

          .margin-top-init__xl,
        .margin-y-init__xl {
            margin-top: initial !important;
          }

          .margin-right-init__xl,
        .margin-x-init__xl {
            margin-right: initial !important;
          }

          .margin-bottom-init__xl,
        .margin-y-init__xl {
            margin-bottom: initial !important;
          }

          .margin-left-init__xl,
        .margin-x-init__xl {
            margin-left: initial !important;
          }

          .padding-init__xl {
            padding: initial !important;
          }

          .padding-top-init__xl,
        .padding-y-init__xl {
            padding-top: initial !important;
          }

          .padding-right-init__xl,
        .padding-x-init__xl {
            padding-right: initial !important;
          }

          .padding-bottom-init__xl,
        .padding-y-init__xl {
            padding-bottom: initial !important;
          }

          .padding-left-init__xl,
        .padding-x-init__xl {
            padding-left: initial !important;
          }
        }
        /*# sourceMappingURL=xmutarn.css.map */
        """);

    /// <summary>
    /// Adiciona o CSS minificado antigo do Xmutarn.
    /// </summary>
    private void AddOldMinCSS() => Import(new CSS() + """
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}::-moz-selection{color:#fff;background-color:var(--theme-A400, #F50057)}::selection{color:#fff;background-color:var(--theme-A400, #F50057)}a{color:var(--theme-500, #9C27B0);text-decoration:none}a:hover,a:active{color:var(--theme-300, #BA68C8)}figure{margin:0}input::-ms-clear,input[type=password]::-ms-reveal{display:none}.border-divider{display:block;margin:0;height:0;border-top:1px solid var(--theme-dividers, rgba(0, 0, 0, 0.12))}.border-divider_padded{margin:0 1rem}.container,.container-fluid{margin:0 auto;padding:0 .9375rem;width:100%}@media(min-width: 576px){.container{max-width:540px}}@media(min-width: 768px){.container{max-width:720px}}@media(min-width: 992px){.container{max-width:960px}}@media(min-width: 1200px){.container{max-width:1140px}}.flex-row{display:flex;margin:0 -0.9375rem;flex-wrap:wrap}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:local("Roboto Thin"),local("Roboto-Thin"),url("../fonts/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzI.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:100;src:local("Roboto Thin Italic"),local("Roboto-ThinItalic"),url("../fonts/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url("../fonts/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url("../fonts/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzI.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}.input{position:relative;font-weight:500;color:var(--theme-secondary, rgba(0, 0, 0, 0.54));border-color:var(--theme-secondary, rgba(0, 0, 0, 0.54))}.input_color-alert{color:#F44336;border-color:#F44336}.input_color-success{color:#4CAF50;border-color:#4CAF50}.input_color-warning{color:#FF9800;border-color:#FF9800}.input--field{padding:1em 0.3125em 0.75em 0;width:100%;font-size:inherit;font-weight:inherit;line-height:1;color:inherit;background-color:transparent}.input--field:focus{color:var(--theme-primary, rgba(0, 0, 0, 0.87));border-color:var(--theme-500, #9C27B0);outline:0}.input--field:focus:not(.input--field_outlined){border-color:var(--theme-500, #9C27B0)}.input--field:focus~.input--label{color:var(--theme-500, #9C27B0)}.input--field:not(.input--field_outlined){padding-left:0.3125em;border:none;border-bottom:0.0625rem solid}.input--field:not(.input--field_outlined)~.input--label{left:0.3125em}.input--field_outlined{padding-left:0.625em;border:1px solid;border-color:inherit;border-radius:0.3125em}.input--field_outlined~.input--label{left:0.625em}.input--label{position:absolute;top:1em;transition:all .3s linear;pointer-events:none}.input--label_active,.input--field:focus~.input--label{transform:translate(-15%, -1.125em) scale(0.7)}.input--description{margin:0;margin-top:0.3125rem;font-size:0.75rem;color:inherit}.typo-use-roboto,.typo-use-default{font-family:"Roboto",sans-serif}.typo-style-italic{font-style:italic !important}.typo-overflow-ellipsis,.typo-overflow-clip{white-space:nowrap;overflow:hidden}.typo-overflow-clip{text-overflow:clip}.typo-overflow-ellipsis{text-overflow:ellipsis}.typo-to-upper{text-transform:uppercase !important}.typo-to-lower{text-transform:lowercase !important}.typo-to-capitalize{text-transform:capitalize !important}.typo-weight-thin{font-weight:100 !important}.typo-weight-light{font-weight:300 !important}.typo-weight-regular{font-weight:400 !important}.typo-weight-medium{font-weight:500 !important}.typo-weight-bold{font-weight:700 !important}.typo-weight-black{font-weight:900 !important}.typo-h1{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2,.avatar--title,.avatar--summary{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left{text-align:left !important}.typo-align-right{text-align:right !important}.typo-align-center{text-align:center !important}.typo-align-justify{text-align:justify !important}@media(min-width: 576px){.typo-h1__sm{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__sm{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__sm{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__sm{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__sm{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__sm{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__sm{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__sm{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__sm{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__sm{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__sm{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__sm{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__sm{text-align:left !important}.typo-align-right__sm{text-align:right !important}.typo-align-center__sm{text-align:center !important}}@media(min-width: 768px){.typo-h1__md{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__md{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__md{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__md{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__md{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__md{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__md{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__md{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__md{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__md{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__md{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__md{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__md{text-align:left !important}.typo-align-right__md{text-align:right !important}.typo-align-center__md{text-align:center !important}}@media(min-width: 992px){.typo-h1__lg{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__lg{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__lg{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__lg{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__lg{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__lg{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__lg{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__lg{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__lg{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__lg{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__lg{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__lg{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__lg{text-align:left !important}.typo-align-right__lg{text-align:right !important}.typo-align-center__lg{text-align:center !important}}@media(min-width: 1200px){.typo-h1__xl{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__xl{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__xl{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__xl{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__xl{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__xl{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__xl{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__xl{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__xl{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__xl{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__xl{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__xl{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__xl{text-align:left !important}.typo-align-right__xl{text-align:right !important}.typo-align-center__xl{text-align:center !important}}.border-left-lg,.border-bottom-lg,.border-right-lg,.border-top-lg,.border-lg,.border-left-md,.border-bottom-md,.border-right-md,.border-top-md,.border-md,.border-left-sm,.border-bottom-sm,.border-right-sm,.border-top-sm,.border-sm,.border-left-0,.border-bottom-0,.border-right-0,.border-top-0,.border-0{border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important}.flex-col-12__xl,.flex-col-11__xl,.flex-col-10__xl,.flex-col-9__xl,.flex-col-8__xl,.flex-col-7__xl,.flex-col-6__xl,.flex-col-5__xl,.flex-col-4__xl,.flex-col-3__xl,.flex-col-2__xl,.flex-col-1__xl,.flex-col-12__lg,.flex-col-11__lg,.flex-col-10__lg,.flex-col-9__lg,.flex-col-8__lg,.flex-col-7__lg,.flex-col-6__lg,.flex-col-5__lg,.flex-col-4__lg,.flex-col-3__lg,.flex-col-2__lg,.flex-col-1__lg,.flex-col-12__md,.flex-col-11__md,.flex-col-10__md,.flex-col-9__md,.flex-col-8__md,.flex-col-7__md,.flex-col-6__md,.flex-col-5__md,.flex-col-4__md,.flex-col-3__md,.flex-col-2__md,.flex-col-1__md,.flex-col-12__sm,.flex-col-11__sm,.flex-col-10__sm,.flex-col-9__sm,.flex-col-8__sm,.flex-col-7__sm,.flex-col-6__sm,.flex-col-5__sm,.flex-col-4__sm,.flex-col-3__sm,.flex-col-2__sm,.flex-col-1__sm,.flex-col-12,.flex-col-11,.flex-col-10,.flex-col-9,.flex-col-8,.flex-col-7,.flex-col-6,.flex-col-5,.flex-col-4,.flex-col-3,.flex-col-2,.flex-col-1{position:relative;width:100%;padding:0 .9375rem}.btn{position:relative;display:inline-flex;overflow:hidden;padding:0 1.143em;height:2.571875em;font-weight:500;text-transform:uppercase;letter-spacing:.02em;border-radius:.25rem;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:not(.btn_outlined):not(.btn_outlined-color){border:none}.btn:not([disabled]):not(.btn_disabled){cursor:pointer}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color){color:#fff}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color)::before{background-color:#fff}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color):not(.btn_color-accent),.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-featured{background-color:var(--theme-500, #9C27B0)}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-accent{background-color:var(--theme-A400, #F50057)}.btn:not([disabled]):not(.btn_disabled):hover::before{opacity:.12}.btn:not([disabled]):not(.btn_disabled):active::before{opacity:.36}.btn:focus{outline:0}.btn:focus::before{opacity:.18}.btn::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:none;will-change:opacity;transition:opacity .2s}.btn[disabled],.btn_disabled{cursor:default;color:var(--theme-disabled, rgba(0, 0, 0, 0.38)) !important;background-color:var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important}.btn[disabled]::before,.btn_disabled::before{background-color:var(--theme-disabled, rgba(0, 0, 0, 0.38))}.btn_flat:not([disabled]):not(.btn_disabled),.btn_outlined:not([disabled]):not(.btn_disabled),.btn_outlined-color:not([disabled]):not(.btn_disabled){background-color:transparent}.btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent),.btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured,.btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent),.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured,.btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent),.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured{color:var(--theme-500, #9C27B0)}.btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before,.btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured::before,.btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before,.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured::before,.btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before,.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured::before{background-color:var(--theme-500, #9C27B0)}.btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent,.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent,.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent{color:var(--theme-A400, #F50057)}.btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent::before,.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent::before,.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent::before{background-color:var(--theme-A400, #F50057)}.btn_outlined,.btn_outlined-color{border:1px solid}.btn_outlined,.btn_outlined-color:not(.btn_color-featured):not(.btn_color-accent){border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12))}.btn_outlined-color.btn_color-featured{border-color:var(--theme-500, #9C27B0)}.btn_outlined-color.btn_color-accent{border-color:var(--theme-A400, #F50057)}.btn_size-xs{font-size:.625rem}.btn_size-sm{font-size:.75rem}.btn_size-md{font-size:.875rem}.btn_size-lg{font-size:1rem}.btn_size-xl{font-size:1.2rem}.btn--icon{margin-right:.571875em;margin-left:-0.28625em}.dropdown{cursor:pointer}.dropdown::before{content:"";position:absolute;top:50%;right:0;margin:-0.125em .3125em 0 0;width:.3125em;height:.3125em;border-bottom:.0625rem solid;border-left:.0625rem solid;border-color:inherit;transform:rotate(-45deg);transition:transform .3s}.dropdown_active::before{transform:rotate(135deg)}.menu{position:absolute;z-index:80;margin:0;min-width:10.625rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);background-color:var(--theme-card, white);border-radius:.125rem;transform:scale(0);transition:.3s;opacity:0;will-change:transform,opacity}.menu_open{transform:scale(1);opacity:1}.menu_origin-top-right,.menu_origin-top-start{transform-origin:top right}.menu_origin-top-left,.menu_origin-top-end{transform-origin:top left}.menu_origin-bottom-right,.menu_origin-bottom-start{transform-origin:bottom right}.menu_origin-bottom-left,.menu_origin-bottom-end{transform-origin:bottom left}.list{margin:0;list-style-type:none}.list:not(.list_padded){padding:.5rem 0}.list_padded{padding:.5rem}.list_padded .list--item{border-radius:.3125rem}.list--item{display:flex;cursor:pointer;padding:1em;color:var(--theme-primary, rgba(0, 0, 0, 0.87));transition:background-color .4s;align-items:center}.list--item:hover{color:inherit;background-color:rgba(0,0,0,.04)}.list--item:active{background-color:rgba(0,0,0,.16)}.list--item_active{background-color:rgba(0,0,0,.03)}.list--item--icon{margin-right:.571875em;margin-left:-0.28625em}.toolbar{position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:40;padding:0 .5rem;font-size:1rem;font-weight:500;color:#fff;justify-content:space-between;align-items:center;flex-wrap:wrap;transition:.3s;will-change:transform}.toolbar:not(.toolbar_dark-color){background-color:var(--theme-700, #7B1FA2)}.toolbar_dark-color{background-color:#212121}.toolbar_hide{transform:translateY(-100%)}.toolbar>.container,.toolbar>.container-fluid{display:flex;padding:0;justify-content:space-between;align-items:center;flex-wrap:wrap}.toolbar--nav{display:flex;overflow-x:auto;padding:.57125em 0;list-style:none;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.toolbar--nav--item{position:relative;margin:0 .125em;padding:1.143em;color:inherit;background-color:transparent;border-radius:.25rem;transition:background-color .4s;flex:0 0 auto}.toolbar--nav--item:hover,.toolbar--nav--item:active,.toolbar--nav--item:focus{color:inherit}.toolbar--nav--item:hover{background-color:rgba(255,255,255,.12)}.toolbar--nav--item:active{background-color:rgba(255,255,255,.36)}.toolbar--nav--item:focus{background-color:rgba(255,255,255,.18);outline:0}.toolbar--nav--item:not(.toolbar--nav--item_bordered){border:none}.toolbar--nav--item_active{background-color:rgba(255,255,255,.07)}.toolbar--nav--item_bordered{border:1px solid rgba(255,255,255,.5)}.toolbar--nav--item_dark{background-color:rgba(0,0,0,.3)}.toolbar--nav--item--icon{margin-right:.259375em;margin-left:-0.16125em}.card{position:relative;border-radius:.3125rem}.card:not(.card_hide-structure){border:1px solid;border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12));background-color:var(--theme-card, white)}.card_hide-structure{background-color:transparent;border:none}.card--header{margin:0;padding:1rem}.card--header--title,.card--header--summary{margin:0}.card--header--title{color:var(--theme-primary, rgba(0, 0, 0, 0.87))}.card--header--summary{color:var(--theme-secondary, rgba(0, 0, 0, 0.54))}.card--header--small{color:inherit;opacity:.7}.card--media{position:relative;background:#000 no-repeat top center;background-size:cover;box-sizing:border-box}.card--media::before{content:"";display:block}.card--media:first-child{border-top-right-radius:inherit;border-top-left-radius:inherit}.card--media:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.card--media_format-hd{padding-bottom:56.25%}.card--media_format-sd{padding-bottom:75%}.card--media_format-square{padding-bottom:100%}.card--media--area{position:absolute;left:0;z-index:10;width:100%}.card--media--area:not(.card--media--area_in-top){bottom:0}.card--media--area_in-top{top:0}.card--media--image{max-width:100%;max-height:34.375rem}.card--content{margin:0;padding:1rem}.card--content p:first-child{margin-top:0}.card--content p:last-child{margin-bottom:0}.card--action{position:relative;margin:0;padding:.5rem}.dialog{position:fixed;top:0;right:0;bottom:0;left:0;z-index:70;overflow-x:hidden;overflow-y:auto;transition:opacity .75s;opacity:0;pointer-events:none}.dialog_open{opacity:1;pointer-events:auto}.navigation-drawer{position:fixed;top:0;left:0;overflow-y:auto;z-index:60;width:18.75rem;height:100%;max-width:100%;background-color:var(--theme-card, white);transform:translateX(-100%);transition:.3s;will-change:transform}.navigation-drawer_open{transform:translateX(0)}.overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:50;min-width:100%;min-height:100%;background-color:rgba(0,0,0,.5);transition:opacity .25s;opacity:0;pointer-events:none}.overlay_active{opacity:1;pointer-events:auto}.toaster{position:fixed;bottom:0;left:0;z-index:90;width:100%}.toaster::after{content:"";display:block;clear:both}.toast{position:relative;display:flex;margin:0;padding:0;width:100%;font-size:.875rem;color:#fff;background-color:#323232;transform:translate(0, 250%);transition:transform .25s 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center}.toast_active{transform:translate(0);transition:transform .25s 0ms cubic-bezier(0, 0, 0.2, 1)}.toast_color-featured{background-color:var(--theme-700, #7B1FA2)}.toast_color-accent{background-color:var(--theme-A400, #F50057)}.toast_color-success{background-color:#4caf50}.toast_color-alert{background-color:#f44336}.toast_color-warning{background-color:#ff9800}.toast--icon{position:relative;display:inline-block;margin:0 0 0 1rem}.toast--content{position:relative;display:inline-block;margin:0;padding:1rem 1.625rem}.toast--content--title{margin:0;color:inherit;font-weight:500}.toast--content--message{margin:0;font-size:inherit;color:inherit}.toast--content--message_secondary{opacity:.9}@media(min-width: 31.25rem){.toaster{width:auto}.toast{margin:0 0 0 1.25rem;margin-bottom:1.25rem;min-width:18.75rem;max-width:31.25rem;border-radius:.1875rem}}.avatar{display:flex;align-items:center}.avatar--image{width:2.8125rem;height:2.8125rem}.avatar--image:not(.avatar--image_rounded){border-radius:50%}.avatar--image_rounded{border-radius:.5rem}.avatar--info{display:inline-block;margin-left:.75rem}.avatar--title,.avatar--summary{margin:0;font-weight:500}.avatar--title{color:var(--theme-primary, rgba(0, 0, 0, 0.87))}.avatar--summary{color:var(--theme-secondary, rgba(0, 0, 0, 0.54))}.avatar--small{color:inherit;opacity:.7}.border-0{border-width:0 !important;border-style:solid}.border-top-0{border-top-width:0 !important;border-top-style:solid}.border-right-0{border-right-width:0 !important;border-right-style:solid}.border-bottom-0{border-bottom-width:0 !important;border-bottom-style:solid}.border-left-0{border-left-width:0 !important;border-left-style:solid}.border-sm{border-width:1px !important;border-style:solid}.border-top-sm{border-top-width:1px !important;border-top-style:solid}.border-right-sm{border-right-width:1px !important;border-right-style:solid}.border-bottom-sm{border-bottom-width:1px !important;border-bottom-style:solid}.border-left-sm{border-left-width:1px !important;border-left-style:solid}.border-md{border-width:2px !important;border-style:solid}.border-top-md{border-top-width:2px !important;border-top-style:solid}.border-right-md{border-right-width:2px !important;border-right-style:solid}.border-bottom-md{border-bottom-width:2px !important;border-bottom-style:solid}.border-left-md{border-left-width:2px !important;border-left-style:solid}.border-lg{border-width:3px !important;border-style:solid}.border-top-lg{border-top-width:3px !important;border-top-style:solid}.border-right-lg{border-right-width:3px !important;border-right-style:solid}.border-bottom-lg{border-bottom-width:3px !important;border-bottom-style:solid}.border-left-lg{border-left-width:3px !important;border-left-style:solid}.border-radius-0{border-radius:0 !important}.border-radius-top-0,.border-radius-top-right-0{border-top-right-radius:0 !important}.border-radius-top-0,.border-radius-top-left-0{border-top-left-radius:0 !important}.border-radius-bottom-0,.border-radius-bottom-right-0{border-bottom-right-radius:0 !important}.border-radius-bottom-0,.border-radius-bottom-left-0{border-bottom-left-radius:0 !important}.border-radius-circle{border-radius:50% !important}.border-radius-sm{border-radius:0.125rem !important}.border-radius-md{border-radius:0.3125rem !important}.border-radius-lg{border-radius:0.5rem !important}.clearfix::after,.card::after,.card--action::after{content:"";display:block;clear:both}.cursor-default{cursor:default}.cursor-grab{cursor:-webkit-grab;cursor:grab}.cursor-pointer{cursor:pointer}.display-none{display:none !important}.display-inline{display:inline !important}.display-inline-block{display:inline-block !important}.display-block{display:block !important}.display-table{display:table !important}.display-table-row{display:table-row !important}.display-table-cell{display:table-cell !important}.display-flex{display:flex !important}.display-inline-flex{display:inline-flex !important}@media(min-width: 576px){.display-none__sm{display:none !important}.display-inline__sm{display:inline !important}.display-inline-block__sm{display:inline-block !important}.display-block__sm{display:block !important}.display-table__sm{display:table !important}.display-table-row__sm{display:table-row !important}.display-table-cell__sm{display:table-cell !important}.display-flex__sm{display:flex !important}.display-inline-flex__sm{display:inline-flex !important}}@media(min-width: 768px){.display-none__md{display:none !important}.display-inline__md{display:inline !important}.display-inline-block__md{display:inline-block !important}.display-block__md{display:block !important}.display-table__md{display:table !important}.display-table-row__md{display:table-row !important}.display-table-cell__md{display:table-cell !important}.display-flex__md{display:flex !important}.display-inline-flex__md{display:inline-flex !important}}@media(min-width: 992px){.display-none__lg{display:none !important}.display-inline__lg{display:inline !important}.display-inline-block__lg{display:inline-block !important}.display-block__lg{display:block !important}.display-table__lg{display:table !important}.display-table-row__lg{display:table-row !important}.display-table-cell__lg{display:table-cell !important}.display-flex__lg{display:flex !important}.display-inline-flex__lg{display:inline-flex !important}}@media(min-width: 1200px){.display-none__xl{display:none !important}.display-inline__xl{display:inline !important}.display-inline-block__xl{display:inline-block !important}.display-block__xl{display:block !important}.display-table__xl{display:table !important}.display-table-row__xl{display:table-row !important}.display-table-cell__xl{display:table-cell !important}.display-flex__xl{display:flex !important}.display-inline-flex__xl{display:inline-flex !important}}.fixed-top{position:fixed;top:0;right:0;bottom:auto;left:0}.fixed-bottom{position:fixed;top:auto;right:0;bottom:0;left:0}.flex-col-auto{width:auto;max-width:none;flex:0 0 auto}.flex-order-0{order:0}.flex-col-1{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1{margin-left:8.3333333333%}.flex-order-1{order:1}.flex-col-2{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2{margin-left:16.6666666667%}.flex-order-2{order:2}.flex-col-3{max-width:25%;flex:0 0 25%}.flex-offset-3{margin-left:25%}.flex-order-3{order:3}.flex-col-4{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4{margin-left:33.3333333333%}.flex-order-4{order:4}.flex-col-5{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5{margin-left:41.6666666667%}.flex-order-5{order:5}.flex-col-6{max-width:50%;flex:0 0 50%}.flex-offset-6{margin-left:50%}.flex-order-6{order:6}.flex-col-7{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7{margin-left:58.3333333333%}.flex-order-7{order:7}.flex-col-8{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8{margin-left:66.6666666667%}.flex-order-8{order:8}.flex-col-9{max-width:75%;flex:0 0 75%}.flex-offset-9{margin-left:75%}.flex-order-9{order:9}.flex-col-10{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10{margin-left:83.3333333333%}.flex-order-10{order:10}.flex-col-11{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11{margin-left:91.6666666667%}.flex-order-11{order:11}.flex-col-12{max-width:100%;flex:0 0 100%}.flex-order-12{order:12}@media(min-width: 576px){.flex-col-auto__sm{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__sm{order:0}.flex-col-1__sm{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__sm{margin-left:8.3333333333%}.flex-order-1__sm{order:1}.flex-col-2__sm{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__sm{margin-left:16.6666666667%}.flex-order-2__sm{order:2}.flex-col-3__sm{max-width:25%;flex:0 0 25%}.flex-offset-3__sm{margin-left:25%}.flex-order-3__sm{order:3}.flex-col-4__sm{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__sm{margin-left:33.3333333333%}.flex-order-4__sm{order:4}.flex-col-5__sm{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__sm{margin-left:41.6666666667%}.flex-order-5__sm{order:5}.flex-col-6__sm{max-width:50%;flex:0 0 50%}.flex-offset-6__sm{margin-left:50%}.flex-order-6__sm{order:6}.flex-col-7__sm{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__sm{margin-left:58.3333333333%}.flex-order-7__sm{order:7}.flex-col-8__sm{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__sm{margin-left:66.6666666667%}.flex-order-8__sm{order:8}.flex-col-9__sm{max-width:75%;flex:0 0 75%}.flex-offset-9__sm{margin-left:75%}.flex-order-9__sm{order:9}.flex-col-10__sm{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__sm{margin-left:83.3333333333%}.flex-order-10__sm{order:10}.flex-col-11__sm{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__sm{margin-left:91.6666666667%}.flex-order-11__sm{order:11}.flex-col-12__sm{max-width:100%;flex:0 0 100%}.flex-order-12__sm{order:12}}@media(min-width: 768px){.flex-col-auto__md{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__md{order:0}.flex-col-1__md{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__md{margin-left:8.3333333333%}.flex-order-1__md{order:1}.flex-col-2__md{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__md{margin-left:16.6666666667%}.flex-order-2__md{order:2}.flex-col-3__md{max-width:25%;flex:0 0 25%}.flex-offset-3__md{margin-left:25%}.flex-order-3__md{order:3}.flex-col-4__md{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__md{margin-left:33.3333333333%}.flex-order-4__md{order:4}.flex-col-5__md{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__md{margin-left:41.6666666667%}.flex-order-5__md{order:5}.flex-col-6__md{max-width:50%;flex:0 0 50%}.flex-offset-6__md{margin-left:50%}.flex-order-6__md{order:6}.flex-col-7__md{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__md{margin-left:58.3333333333%}.flex-order-7__md{order:7}.flex-col-8__md{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__md{margin-left:66.6666666667%}.flex-order-8__md{order:8}.flex-col-9__md{max-width:75%;flex:0 0 75%}.flex-offset-9__md{margin-left:75%}.flex-order-9__md{order:9}.flex-col-10__md{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__md{margin-left:83.3333333333%}.flex-order-10__md{order:10}.flex-col-11__md{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__md{margin-left:91.6666666667%}.flex-order-11__md{order:11}.flex-col-12__md{max-width:100%;flex:0 0 100%}.flex-order-12__md{order:12}}@media(min-width: 992px){.flex-col-auto__lg{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__lg{order:0}.flex-col-1__lg{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__lg{margin-left:8.3333333333%}.flex-order-1__lg{order:1}.flex-col-2__lg{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__lg{margin-left:16.6666666667%}.flex-order-2__lg{order:2}.flex-col-3__lg{max-width:25%;flex:0 0 25%}.flex-offset-3__lg{margin-left:25%}.flex-order-3__lg{order:3}.flex-col-4__lg{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__lg{margin-left:33.3333333333%}.flex-order-4__lg{order:4}.flex-col-5__lg{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__lg{margin-left:41.6666666667%}.flex-order-5__lg{order:5}.flex-col-6__lg{max-width:50%;flex:0 0 50%}.flex-offset-6__lg{margin-left:50%}.flex-order-6__lg{order:6}.flex-col-7__lg{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__lg{margin-left:58.3333333333%}.flex-order-7__lg{order:7}.flex-col-8__lg{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__lg{margin-left:66.6666666667%}.flex-order-8__lg{order:8}.flex-col-9__lg{max-width:75%;flex:0 0 75%}.flex-offset-9__lg{margin-left:75%}.flex-order-9__lg{order:9}.flex-col-10__lg{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__lg{margin-left:83.3333333333%}.flex-order-10__lg{order:10}.flex-col-11__lg{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__lg{margin-left:91.6666666667%}.flex-order-11__lg{order:11}.flex-col-12__lg{max-width:100%;flex:0 0 100%}.flex-order-12__lg{order:12}}@media(min-width: 1200px){.flex-col-auto__xl{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__xl{order:0}.flex-col-1__xl{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__xl{margin-left:8.3333333333%}.flex-order-1__xl{order:1}.flex-col-2__xl{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__xl{margin-left:16.6666666667%}.flex-order-2__xl{order:2}.flex-col-3__xl{max-width:25%;flex:0 0 25%}.flex-offset-3__xl{margin-left:25%}.flex-order-3__xl{order:3}.flex-col-4__xl{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__xl{margin-left:33.3333333333%}.flex-order-4__xl{order:4}.flex-col-5__xl{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__xl{margin-left:41.6666666667%}.flex-order-5__xl{order:5}.flex-col-6__xl{max-width:50%;flex:0 0 50%}.flex-offset-6__xl{margin-left:50%}.flex-order-6__xl{order:6}.flex-col-7__xl{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__xl{margin-left:58.3333333333%}.flex-order-7__xl{order:7}.flex-col-8__xl{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__xl{margin-left:66.6666666667%}.flex-order-8__xl{order:8}.flex-col-9__xl{max-width:75%;flex:0 0 75%}.flex-offset-9__xl{margin-left:75%}.flex-order-9__xl{order:9}.flex-col-10__xl{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__xl{margin-left:83.3333333333%}.flex-order-10__xl{order:10}.flex-col-11__xl{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__xl{margin-left:91.6666666667%}.flex-order-11__xl{order:11}.flex-col-12__xl{max-width:100%;flex:0 0 100%}.flex-order-12__xl{order:12}}.flex-dir-row{flex-direction:row}.flex-dir-column{flex-direction:column}.flex-dir-row-reverse{flex-direction:row-reverse}.flex-dir-column-reverse{flex-direction:column-reverse}.flex-content-start{justify-content:flex-start}.flex-content-end{justify-content:flex-end}.flex-content-center{justify-content:center}.flex-content-around{justify-content:space-around}.flex-content-between{justify-content:space-between}.flex-items-start{align-items:flex-start}.flex-items-end{align-items:flex-end}.flex-items-center{align-items:center}.flex-items-stretch{align-items:stretch}.flex-items-baseline{align-items:baseline}@media(min-width: 576px){.flex-dir-row__sm{flex-direction:row}.flex-dir-column__sm{flex-direction:column}.flex-dir-row-reverse__sm{flex-direction:row-reverse}.flex-dir-column-reverse__sm{flex-direction:column-reverse}.flex-content-start__sm{justify-content:flex-start}.flex-content-end__sm{justify-content:flex-end}.flex-content-center__sm{justify-content:center}.flex-content-around__sm{justify-content:space-around}.flex-content-between__sm{justify-content:space-between}.flex-items-start__sm{align-items:flex-start}.flex-items-end__sm{align-items:flex-end}.flex-items-center__sm{align-items:center}.flex-items-stretch__sm{align-items:stretch}.flex-items-baseline__sm{align-items:baseline}}@media(min-width: 768px){.flex-dir-row__md{flex-direction:row}.flex-dir-column__md{flex-direction:column}.flex-dir-row-reverse__md{flex-direction:row-reverse}.flex-dir-column-reverse__md{flex-direction:column-reverse}.flex-content-start__md{justify-content:flex-start}.flex-content-end__md{justify-content:flex-end}.flex-content-center__md{justify-content:center}.flex-content-around__md{justify-content:space-around}.flex-content-between__md{justify-content:space-between}.flex-items-start__md{align-items:flex-start}.flex-items-end__md{align-items:flex-end}.flex-items-center__md{align-items:center}.flex-items-stretch__md{align-items:stretch}.flex-items-baseline__md{align-items:baseline}}@media(min-width: 992px){.flex-dir-row__lg{flex-direction:row}.flex-dir-column__lg{flex-direction:column}.flex-dir-row-reverse__lg{flex-direction:row-reverse}.flex-dir-column-reverse__lg{flex-direction:column-reverse}.flex-content-start__lg{justify-content:flex-start}.flex-content-end__lg{justify-content:flex-end}.flex-content-center__lg{justify-content:center}.flex-content-around__lg{justify-content:space-around}.flex-content-between__lg{justify-content:space-between}.flex-items-start__lg{align-items:flex-start}.flex-items-end__lg{align-items:flex-end}.flex-items-center__lg{align-items:center}.flex-items-stretch__lg{align-items:stretch}.flex-items-baseline__lg{align-items:baseline}}@media(min-width: 1200px){.flex-dir-row__xl{flex-direction:row}.flex-dir-column__xl{flex-direction:column}.flex-dir-row-reverse__xl{flex-direction:row-reverse}.flex-dir-column-reverse__xl{flex-direction:column-reverse}.flex-content-start__xl{justify-content:flex-start}.flex-content-end__xl{justify-content:flex-end}.flex-content-center__xl{justify-content:center}.flex-content-around__xl{justify-content:space-around}.flex-content-between__xl{justify-content:space-between}.flex-items-start__xl{align-items:flex-start}.flex-items-end__xl{align-items:flex-end}.flex-items-center__xl{align-items:center}.flex-items-stretch__xl{align-items:stretch}.flex-items-baseline__xl{align-items:baseline}}.float-right{float:right !important}.float-left{float:left !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-relative{position:relative !important}.shadow-none{box-shadow:none !important}.shadow-floating,.menu,.toast{box-shadow:0 .125rem .25rem -0.0625rem rgba(0,0,0,.2),0 .25rem .3125rem 0 rgba(0,0,0,.14),0 .0625rem .625rem 0 rgba(0,0,0,.12)}.shadow-highlight,.navigation-drawer{box-shadow:0 .0625rem .3125rem rgba(0,0,0,.12)}.width-25{width:25% !important}.width-50{width:50% !important}.width-75{width:75% !important}.width-100{width:100% !important}.width-auto{width:auto !important}.max-width-100{max-width:100% !important}.height-25{height:25% !important}.height-50{height:50% !important}.height-75{height:75% !important}.height-100{height:100% !important}.height-auto{height:auto !important}.max-height-100{max-height:100% !important}.margin-0{margin:0 !important}.margin-top-0,.margin-y-0{margin-top:0 !important}.margin-right-0,.margin-x-0{margin-right:0 !important}.margin-bottom-0,.margin-y-0{margin-bottom:0 !important}.margin-left-0,.margin-x-0{margin-left:0 !important}.padding-0{padding:0 !important}.padding-top-0,.padding-y-0{padding-top:0 !important}.padding-right-0,.padding-x-0{padding-right:0 !important}.padding-bottom-0,.padding-y-0{padding-bottom:0 !important}.padding-left-0,.padding-x-0{padding-left:0 !important}.margin-xs{margin:0.25rem !important}.margin-top-xs,.margin-y-xs{margin-top:0.25rem !important}.margin-right-xs,.margin-x-xs{margin-right:0.25rem !important}.margin-bottom-xs,.margin-y-xs{margin-bottom:0.25rem !important}.margin-left-xs,.margin-x-xs{margin-left:0.25rem !important}.padding-xs{padding:0.25rem !important}.padding-top-xs,.padding-y-xs{padding-top:0.25rem !important}.padding-right-xs,.padding-x-xs{padding-right:0.25rem !important}.padding-bottom-xs,.padding-y-xs{padding-bottom:0.25rem !important}.padding-left-xs,.padding-x-xs{padding-left:0.25rem !important}.margin-sm{margin:0.5rem !important}.margin-top-sm,.margin-y-sm{margin-top:0.5rem !important}.margin-right-sm,.margin-x-sm{margin-right:0.5rem !important}.margin-bottom-sm,.margin-y-sm{margin-bottom:0.5rem !important}.margin-left-sm,.margin-x-sm{margin-left:0.5rem !important}.padding-sm{padding:0.5rem !important}.padding-top-sm,.padding-y-sm{padding-top:0.5rem !important}.padding-right-sm,.padding-x-sm{padding-right:0.5rem !important}.padding-bottom-sm,.padding-y-sm{padding-bottom:0.5rem !important}.padding-left-sm,.padding-x-sm{padding-left:0.5rem !important}.margin-md{margin:1rem !important}.margin-top-md,.margin-y-md{margin-top:1rem !important}.margin-right-md,.margin-x-md{margin-right:1rem !important}.margin-bottom-md,.margin-y-md{margin-bottom:1rem !important}.margin-left-md,.margin-x-md{margin-left:1rem !important}.padding-md{padding:1rem !important}.padding-top-md,.padding-y-md{padding-top:1rem !important}.padding-right-md,.padding-x-md{padding-right:1rem !important}.padding-bottom-md,.padding-y-md{padding-bottom:1rem !important}.padding-left-md,.padding-x-md{padding-left:1rem !important}.margin-lg{margin:1.5rem !important}.margin-top-lg,.margin-y-lg{margin-top:1.5rem !important}.margin-right-lg,.margin-x-lg{margin-right:1.5rem !important}.margin-bottom-lg,.margin-y-lg{margin-bottom:1.5rem !important}.margin-left-lg,.margin-x-lg{margin-left:1.5rem !important}.padding-lg{padding:1.5rem !important}.padding-top-lg,.padding-y-lg{padding-top:1.5rem !important}.padding-right-lg,.padding-x-lg{padding-right:1.5rem !important}.padding-bottom-lg,.padding-y-lg{padding-bottom:1.5rem !important}.padding-left-lg,.padding-x-lg{padding-left:1.5rem !important}.margin-xl{margin:3rem !important}.margin-top-xl,.margin-y-xl{margin-top:3rem !important}.margin-right-xl,.margin-x-xl{margin-right:3rem !important}.margin-bottom-xl,.margin-y-xl{margin-bottom:3rem !important}.margin-left-xl,.margin-x-xl{margin-left:3rem !important}.padding-xl{padding:3rem !important}.padding-top-xl,.padding-y-xl{padding-top:3rem !important}.padding-right-xl,.padding-x-xl{padding-right:3rem !important}.padding-bottom-xl,.padding-y-xl{padding-bottom:3rem !important}.padding-left-xl,.padding-x-xl{padding-left:3rem !important}.margin-auto{margin:auto !important}.margin-top-auto,.margin-y-auto{margin-top:auto !important}.margin-right-auto,.margin-x-auto{margin-right:auto !important}.margin-bottom-auto,.margin-y-auto{margin-bottom:auto !important}.margin-left-auto,.margin-x-auto{margin-left:auto !important}.margin-init{margin:initial !important}.margin-top-init,.margin-y-init{margin-top:initial !important}.margin-right-init,.margin-x-init{margin-right:initial !important}.margin-bottom-init,.margin-y-init{margin-bottom:initial !important}.margin-left-init,.margin-x-init{margin-left:initial !important}.padding-init{padding:initial !important}.padding-top-init,.padding-y-init{padding-top:initial !important}.padding-right-init,.padding-x-init{padding-right:initial !important}.padding-bottom-init,.padding-y-init{padding-bottom:initial !important}.padding-left-init,.padding-x-init{padding-left:initial !important}@media(min-width: 576px){.margin-0__sm{margin:0 !important}.margin-top-0__sm,.margin-y-0__sm{margin-top:0 !important}.margin-right-0__sm,.margin-x-0__sm{margin-right:0 !important}.margin-bottom-0__sm,.margin-y-0__sm{margin-bottom:0 !important}.margin-left-0__sm,.margin-x-0__sm{margin-left:0 !important}.padding-0__sm{padding:0 !important}.padding-top-0__sm,.padding-y-0__sm{padding-top:0 !important}.padding-right-0__sm,.padding-x-0__sm{padding-right:0 !important}.padding-bottom-0__sm,.padding-y-0__sm{padding-bottom:0 !important}.padding-left-0__sm,.padding-x-0__sm{padding-left:0 !important}.margin-xs__sm{margin:0.25rem !important}.margin-top-xs__sm,.margin-y-xs__sm{margin-top:0.25rem !important}.margin-right-xs__sm,.margin-x-xs__sm{margin-right:0.25rem !important}.margin-bottom-xs__sm,.margin-y-xs__sm{margin-bottom:0.25rem !important}.margin-left-xs__sm,.margin-x-xs__sm{margin-left:0.25rem !important}.padding-xs__sm{padding:0.25rem !important}.padding-top-xs__sm,.padding-y-xs__sm{padding-top:0.25rem !important}.padding-right-xs__sm,.padding-x-xs__sm{padding-right:0.25rem !important}.padding-bottom-xs__sm,.padding-y-xs__sm{padding-bottom:0.25rem !important}.padding-left-xs__sm,.padding-x-xs__sm{padding-left:0.25rem !important}.margin-sm__sm{margin:0.5rem !important}.margin-top-sm__sm,.margin-y-sm__sm{margin-top:0.5rem !important}.margin-right-sm__sm,.margin-x-sm__sm{margin-right:0.5rem !important}.margin-bottom-sm__sm,.margin-y-sm__sm{margin-bottom:0.5rem !important}.margin-left-sm__sm,.margin-x-sm__sm{margin-left:0.5rem !important}.padding-sm__sm{padding:0.5rem !important}.padding-top-sm__sm,.padding-y-sm__sm{padding-top:0.5rem !important}.padding-right-sm__sm,.padding-x-sm__sm{padding-right:0.5rem !important}.padding-bottom-sm__sm,.padding-y-sm__sm{padding-bottom:0.5rem !important}.padding-left-sm__sm,.padding-x-sm__sm{padding-left:0.5rem !important}.margin-md__sm{margin:1rem !important}.margin-top-md__sm,.margin-y-md__sm{margin-top:1rem !important}.margin-right-md__sm,.margin-x-md__sm{margin-right:1rem !important}.margin-bottom-md__sm,.margin-y-md__sm{margin-bottom:1rem !important}.margin-left-md__sm,.margin-x-md__sm{margin-left:1rem !important}.padding-md__sm{padding:1rem !important}.padding-top-md__sm,.padding-y-md__sm{padding-top:1rem !important}.padding-right-md__sm,.padding-x-md__sm{padding-right:1rem !important}.padding-bottom-md__sm,.padding-y-md__sm{padding-bottom:1rem !important}.padding-left-md__sm,.padding-x-md__sm{padding-left:1rem !important}.margin-lg__sm{margin:1.5rem !important}.margin-top-lg__sm,.margin-y-lg__sm{margin-top:1.5rem !important}.margin-right-lg__sm,.margin-x-lg__sm{margin-right:1.5rem !important}.margin-bottom-lg__sm,.margin-y-lg__sm{margin-bottom:1.5rem !important}.margin-left-lg__sm,.margin-x-lg__sm{margin-left:1.5rem !important}.padding-lg__sm{padding:1.5rem !important}.padding-top-lg__sm,.padding-y-lg__sm{padding-top:1.5rem !important}.padding-right-lg__sm,.padding-x-lg__sm{padding-right:1.5rem !important}.padding-bottom-lg__sm,.padding-y-lg__sm{padding-bottom:1.5rem !important}.padding-left-lg__sm,.padding-x-lg__sm{padding-left:1.5rem !important}.margin-xl__sm{margin:3rem !important}.margin-top-xl__sm,.margin-y-xl__sm{margin-top:3rem !important}.margin-right-xl__sm,.margin-x-xl__sm{margin-right:3rem !important}.margin-bottom-xl__sm,.margin-y-xl__sm{margin-bottom:3rem !important}.margin-left-xl__sm,.margin-x-xl__sm{margin-left:3rem !important}.padding-xl__sm{padding:3rem !important}.padding-top-xl__sm,.padding-y-xl__sm{padding-top:3rem !important}.padding-right-xl__sm,.padding-x-xl__sm{padding-right:3rem !important}.padding-bottom-xl__sm,.padding-y-xl__sm{padding-bottom:3rem !important}.padding-left-xl__sm,.padding-x-xl__sm{padding-left:3rem !important}.margin-auto__sm{margin:auto !important}.margin-top-auto__sm,.margin-y-auto__sm{margin-top:auto !important}.margin-right-auto__sm,.margin-x-auto__sm{margin-right:auto !important}.margin-bottom-auto__sm,.margin-y-auto__sm{margin-bottom:auto !important}.margin-left-auto__sm,.margin-x-auto__sm{margin-left:auto !important}.margin-init__sm{margin:initial !important}.margin-top-init__sm,.margin-y-init__sm{margin-top:initial !important}.margin-right-init__sm,.margin-x-init__sm{margin-right:initial !important}.margin-bottom-init__sm,.margin-y-init__sm{margin-bottom:initial !important}.margin-left-init__sm,.margin-x-init__sm{margin-left:initial !important}.padding-init__sm{padding:initial !important}.padding-top-init__sm,.padding-y-init__sm{padding-top:initial !important}.padding-right-init__sm,.padding-x-init__sm{padding-right:initial !important}.padding-bottom-init__sm,.padding-y-init__sm{padding-bottom:initial !important}.padding-left-init__sm,.padding-x-init__sm{padding-left:initial !important}}@media(min-width: 768px){.margin-0__md{margin:0 !important}.margin-top-0__md,.margin-y-0__md{margin-top:0 !important}.margin-right-0__md,.margin-x-0__md{margin-right:0 !important}.margin-bottom-0__md,.margin-y-0__md{margin-bottom:0 !important}.margin-left-0__md,.margin-x-0__md{margin-left:0 !important}.padding-0__md{padding:0 !important}.padding-top-0__md,.padding-y-0__md{padding-top:0 !important}.padding-right-0__md,.padding-x-0__md{padding-right:0 !important}.padding-bottom-0__md,.padding-y-0__md{padding-bottom:0 !important}.padding-left-0__md,.padding-x-0__md{padding-left:0 !important}.margin-xs__md{margin:0.25rem !important}.margin-top-xs__md,.margin-y-xs__md{margin-top:0.25rem !important}.margin-right-xs__md,.margin-x-xs__md{margin-right:0.25rem !important}.margin-bottom-xs__md,.margin-y-xs__md{margin-bottom:0.25rem !important}.margin-left-xs__md,.margin-x-xs__md{margin-left:0.25rem !important}.padding-xs__md{padding:0.25rem !important}.padding-top-xs__md,.padding-y-xs__md{padding-top:0.25rem !important}.padding-right-xs__md,.padding-x-xs__md{padding-right:0.25rem !important}.padding-bottom-xs__md,.padding-y-xs__md{padding-bottom:0.25rem !important}.padding-left-xs__md,.padding-x-xs__md{padding-left:0.25rem !important}.margin-sm__md{margin:0.5rem !important}.margin-top-sm__md,.margin-y-sm__md{margin-top:0.5rem !important}.margin-right-sm__md,.margin-x-sm__md{margin-right:0.5rem !important}.margin-bottom-sm__md,.margin-y-sm__md{margin-bottom:0.5rem !important}.margin-left-sm__md,.margin-x-sm__md{margin-left:0.5rem !important}.padding-sm__md{padding:0.5rem !important}.padding-top-sm__md,.padding-y-sm__md{padding-top:0.5rem !important}.padding-right-sm__md,.padding-x-sm__md{padding-right:0.5rem !important}.padding-bottom-sm__md,.padding-y-sm__md{padding-bottom:0.5rem !important}.padding-left-sm__md,.padding-x-sm__md{padding-left:0.5rem !important}.margin-md__md{margin:1rem !important}.margin-top-md__md,.margin-y-md__md{margin-top:1rem !important}.margin-right-md__md,.margin-x-md__md{margin-right:1rem !important}.margin-bottom-md__md,.margin-y-md__md{margin-bottom:1rem !important}.margin-left-md__md,.margin-x-md__md{margin-left:1rem !important}.padding-md__md{padding:1rem !important}.padding-top-md__md,.padding-y-md__md{padding-top:1rem !important}.padding-right-md__md,.padding-x-md__md{padding-right:1rem !important}.padding-bottom-md__md,.padding-y-md__md{padding-bottom:1rem !important}.padding-left-md__md,.padding-x-md__md{padding-left:1rem !important}.margin-lg__md{margin:1.5rem !important}.margin-top-lg__md,.margin-y-lg__md{margin-top:1.5rem !important}.margin-right-lg__md,.margin-x-lg__md{margin-right:1.5rem !important}.margin-bottom-lg__md,.margin-y-lg__md{margin-bottom:1.5rem !important}.margin-left-lg__md,.margin-x-lg__md{margin-left:1.5rem !important}.padding-lg__md{padding:1.5rem !important}.padding-top-lg__md,.padding-y-lg__md{padding-top:1.5rem !important}.padding-right-lg__md,.padding-x-lg__md{padding-right:1.5rem !important}.padding-bottom-lg__md,.padding-y-lg__md{padding-bottom:1.5rem !important}.padding-left-lg__md,.padding-x-lg__md{padding-left:1.5rem !important}.margin-xl__md{margin:3rem !important}.margin-top-xl__md,.margin-y-xl__md{margin-top:3rem !important}.margin-right-xl__md,.margin-x-xl__md{margin-right:3rem !important}.margin-bottom-xl__md,.margin-y-xl__md{margin-bottom:3rem !important}.margin-left-xl__md,.margin-x-xl__md{margin-left:3rem !important}.padding-xl__md{padding:3rem !important}.padding-top-xl__md,.padding-y-xl__md{padding-top:3rem !important}.padding-right-xl__md,.padding-x-xl__md{padding-right:3rem !important}.padding-bottom-xl__md,.padding-y-xl__md{padding-bottom:3rem !important}.padding-left-xl__md,.padding-x-xl__md{padding-left:3rem !important}.margin-auto__md{margin:auto !important}.margin-top-auto__md,.margin-y-auto__md{margin-top:auto !important}.margin-right-auto__md,.margin-x-auto__md{margin-right:auto !important}.margin-bottom-auto__md,.margin-y-auto__md{margin-bottom:auto !important}.margin-left-auto__md,.margin-x-auto__md{margin-left:auto !important}.margin-init__md{margin:initial !important}.margin-top-init__md,.margin-y-init__md{margin-top:initial !important}.margin-right-init__md,.margin-x-init__md{margin-right:initial !important}.margin-bottom-init__md,.margin-y-init__md{margin-bottom:initial !important}.margin-left-init__md,.margin-x-init__md{margin-left:initial !important}.padding-init__md{padding:initial !important}.padding-top-init__md,.padding-y-init__md{padding-top:initial !important}.padding-right-init__md,.padding-x-init__md{padding-right:initial !important}.padding-bottom-init__md,.padding-y-init__md{padding-bottom:initial !important}.padding-left-init__md,.padding-x-init__md{padding-left:initial !important}}@media(min-width: 992px){.margin-0__lg{margin:0 !important}.margin-top-0__lg,.margin-y-0__lg{margin-top:0 !important}.margin-right-0__lg,.margin-x-0__lg{margin-right:0 !important}.margin-bottom-0__lg,.margin-y-0__lg{margin-bottom:0 !important}.margin-left-0__lg,.margin-x-0__lg{margin-left:0 !important}.padding-0__lg{padding:0 !important}.padding-top-0__lg,.padding-y-0__lg{padding-top:0 !important}.padding-right-0__lg,.padding-x-0__lg{padding-right:0 !important}.padding-bottom-0__lg,.padding-y-0__lg{padding-bottom:0 !important}.padding-left-0__lg,.padding-x-0__lg{padding-left:0 !important}.margin-xs__lg{margin:0.25rem !important}.margin-top-xs__lg,.margin-y-xs__lg{margin-top:0.25rem !important}.margin-right-xs__lg,.margin-x-xs__lg{margin-right:0.25rem !important}.margin-bottom-xs__lg,.margin-y-xs__lg{margin-bottom:0.25rem !important}.margin-left-xs__lg,.margin-x-xs__lg{margin-left:0.25rem !important}.padding-xs__lg{padding:0.25rem !important}.padding-top-xs__lg,.padding-y-xs__lg{padding-top:0.25rem !important}.padding-right-xs__lg,.padding-x-xs__lg{padding-right:0.25rem !important}.padding-bottom-xs__lg,.padding-y-xs__lg{padding-bottom:0.25rem !important}.padding-left-xs__lg,.padding-x-xs__lg{padding-left:0.25rem !important}.margin-sm__lg{margin:0.5rem !important}.margin-top-sm__lg,.margin-y-sm__lg{margin-top:0.5rem !important}.margin-right-sm__lg,.margin-x-sm__lg{margin-right:0.5rem !important}.margin-bottom-sm__lg,.margin-y-sm__lg{margin-bottom:0.5rem !important}.margin-left-sm__lg,.margin-x-sm__lg{margin-left:0.5rem !important}.padding-sm__lg{padding:0.5rem !important}.padding-top-sm__lg,.padding-y-sm__lg{padding-top:0.5rem !important}.padding-right-sm__lg,.padding-x-sm__lg{padding-right:0.5rem !important}.padding-bottom-sm__lg,.padding-y-sm__lg{padding-bottom:0.5rem !important}.padding-left-sm__lg,.padding-x-sm__lg{padding-left:0.5rem !important}.margin-md__lg{margin:1rem !important}.margin-top-md__lg,.margin-y-md__lg{margin-top:1rem !important}.margin-right-md__lg,.margin-x-md__lg{margin-right:1rem !important}.margin-bottom-md__lg,.margin-y-md__lg{margin-bottom:1rem !important}.margin-left-md__lg,.margin-x-md__lg{margin-left:1rem !important}.padding-md__lg{padding:1rem !important}.padding-top-md__lg,.padding-y-md__lg{padding-top:1rem !important}.padding-right-md__lg,.padding-x-md__lg{padding-right:1rem !important}.padding-bottom-md__lg,.padding-y-md__lg{padding-bottom:1rem !important}.padding-left-md__lg,.padding-x-md__lg{padding-left:1rem !important}.margin-lg__lg{margin:1.5rem !important}.margin-top-lg__lg,.margin-y-lg__lg{margin-top:1.5rem !important}.margin-right-lg__lg,.margin-x-lg__lg{margin-right:1.5rem !important}.margin-bottom-lg__lg,.margin-y-lg__lg{margin-bottom:1.5rem !important}.margin-left-lg__lg,.margin-x-lg__lg{margin-left:1.5rem !important}.padding-lg__lg{padding:1.5rem !important}.padding-top-lg__lg,.padding-y-lg__lg{padding-top:1.5rem !important}.padding-right-lg__lg,.padding-x-lg__lg{padding-right:1.5rem !important}.padding-bottom-lg__lg,.padding-y-lg__lg{padding-bottom:1.5rem !important}.padding-left-lg__lg,.padding-x-lg__lg{padding-left:1.5rem !important}.margin-xl__lg{margin:3rem !important}.margin-top-xl__lg,.margin-y-xl__lg{margin-top:3rem !important}.margin-right-xl__lg,.margin-x-xl__lg{margin-right:3rem !important}.margin-bottom-xl__lg,.margin-y-xl__lg{margin-bottom:3rem !important}.margin-left-xl__lg,.margin-x-xl__lg{margin-left:3rem !important}.padding-xl__lg{padding:3rem !important}.padding-top-xl__lg,.padding-y-xl__lg{padding-top:3rem !important}.padding-right-xl__lg,.padding-x-xl__lg{padding-right:3rem !important}.padding-bottom-xl__lg,.padding-y-xl__lg{padding-bottom:3rem !important}.padding-left-xl__lg,.padding-x-xl__lg{padding-left:3rem !important}.margin-auto__lg{margin:auto !important}.margin-top-auto__lg,.margin-y-auto__lg{margin-top:auto !important}.margin-right-auto__lg,.margin-x-auto__lg{margin-right:auto !important}.margin-bottom-auto__lg,.margin-y-auto__lg{margin-bottom:auto !important}.margin-left-auto__lg,.margin-x-auto__lg{margin-left:auto !important}.margin-init__lg{margin:initial !important}.margin-top-init__lg,.margin-y-init__lg{margin-top:initial !important}.margin-right-init__lg,.margin-x-init__lg{margin-right:initial !important}.margin-bottom-init__lg,.margin-y-init__lg{margin-bottom:initial !important}.margin-left-init__lg,.margin-x-init__lg{margin-left:initial !important}.padding-init__lg{padding:initial !important}.padding-top-init__lg,.padding-y-init__lg{padding-top:initial !important}.padding-right-init__lg,.padding-x-init__lg{padding-right:initial !important}.padding-bottom-init__lg,.padding-y-init__lg{padding-bottom:initial !important}.padding-left-init__lg,.padding-x-init__lg{padding-left:initial !important}}@media(min-width: 1200px){.margin-0__xl{margin:0 !important}.margin-top-0__xl,.margin-y-0__xl{margin-top:0 !important}.margin-right-0__xl,.margin-x-0__xl{margin-right:0 !important}.margin-bottom-0__xl,.margin-y-0__xl{margin-bottom:0 !important}.margin-left-0__xl,.margin-x-0__xl{margin-left:0 !important}.padding-0__xl{padding:0 !important}.padding-top-0__xl,.padding-y-0__xl{padding-top:0 !important}.padding-right-0__xl,.padding-x-0__xl{padding-right:0 !important}.padding-bottom-0__xl,.padding-y-0__xl{padding-bottom:0 !important}.padding-left-0__xl,.padding-x-0__xl{padding-left:0 !important}.margin-xs__xl{margin:0.25rem !important}.margin-top-xs__xl,.margin-y-xs__xl{margin-top:0.25rem !important}.margin-right-xs__xl,.margin-x-xs__xl{margin-right:0.25rem !important}.margin-bottom-xs__xl,.margin-y-xs__xl{margin-bottom:0.25rem !important}.margin-left-xs__xl,.margin-x-xs__xl{margin-left:0.25rem !important}.padding-xs__xl{padding:0.25rem !important}.padding-top-xs__xl,.padding-y-xs__xl{padding-top:0.25rem !important}.padding-right-xs__xl,.padding-x-xs__xl{padding-right:0.25rem !important}.padding-bottom-xs__xl,.padding-y-xs__xl{padding-bottom:0.25rem !important}.padding-left-xs__xl,.padding-x-xs__xl{padding-left:0.25rem !important}.margin-sm__xl{margin:0.5rem !important}.margin-top-sm__xl,.margin-y-sm__xl{margin-top:0.5rem !important}.margin-right-sm__xl,.margin-x-sm__xl{margin-right:0.5rem !important}.margin-bottom-sm__xl,.margin-y-sm__xl{margin-bottom:0.5rem !important}.margin-left-sm__xl,.margin-x-sm__xl{margin-left:0.5rem !important}.padding-sm__xl{padding:0.5rem !important}.padding-top-sm__xl,.padding-y-sm__xl{padding-top:0.5rem !important}.padding-right-sm__xl,.padding-x-sm__xl{padding-right:0.5rem !important}.padding-bottom-sm__xl,.padding-y-sm__xl{padding-bottom:0.5rem !important}.padding-left-sm__xl,.padding-x-sm__xl{padding-left:0.5rem !important}.margin-md__xl{margin:1rem !important}.margin-top-md__xl,.margin-y-md__xl{margin-top:1rem !important}.margin-right-md__xl,.margin-x-md__xl{margin-right:1rem !important}.margin-bottom-md__xl,.margin-y-md__xl{margin-bottom:1rem !important}.margin-left-md__xl,.margin-x-md__xl{margin-left:1rem !important}.padding-md__xl{padding:1rem !important}.padding-top-md__xl,.padding-y-md__xl{padding-top:1rem !important}.padding-right-md__xl,.padding-x-md__xl{padding-right:1rem !important}.padding-bottom-md__xl,.padding-y-md__xl{padding-bottom:1rem !important}.padding-left-md__xl,.padding-x-md__xl{padding-left:1rem !important}.margin-lg__xl{margin:1.5rem !important}.margin-top-lg__xl,.margin-y-lg__xl{margin-top:1.5rem !important}.margin-right-lg__xl,.margin-x-lg__xl{margin-right:1.5rem !important}.margin-bottom-lg__xl,.margin-y-lg__xl{margin-bottom:1.5rem !important}.margin-left-lg__xl,.margin-x-lg__xl{margin-left:1.5rem !important}.padding-lg__xl{padding:1.5rem !important}.padding-top-lg__xl,.padding-y-lg__xl{padding-top:1.5rem !important}.padding-right-lg__xl,.padding-x-lg__xl{padding-right:1.5rem !important}.padding-bottom-lg__xl,.padding-y-lg__xl{padding-bottom:1.5rem !important}.padding-left-lg__xl,.padding-x-lg__xl{padding-left:1.5rem !important}.margin-xl__xl{margin:3rem !important}.margin-top-xl__xl,.margin-y-xl__xl{margin-top:3rem !important}.margin-right-xl__xl,.margin-x-xl__xl{margin-right:3rem !important}.margin-bottom-xl__xl,.margin-y-xl__xl{margin-bottom:3rem !important}.margin-left-xl__xl,.margin-x-xl__xl{margin-left:3rem !important}.padding-xl__xl{padding:3rem !important}.padding-top-xl__xl,.padding-y-xl__xl{padding-top:3rem !important}.padding-right-xl__xl,.padding-x-xl__xl{padding-right:3rem !important}.padding-bottom-xl__xl,.padding-y-xl__xl{padding-bottom:3rem !important}.padding-left-xl__xl,.padding-x-xl__xl{padding-left:3rem !important}.margin-auto__xl{margin:auto !important}.margin-top-auto__xl,.margin-y-auto__xl{margin-top:auto !important}.margin-right-auto__xl,.margin-x-auto__xl{margin-right:auto !important}.margin-bottom-auto__xl,.margin-y-auto__xl{margin-bottom:auto !important}.margin-left-auto__xl,.margin-x-auto__xl{margin-left:auto !important}.margin-init__xl{margin:initial !important}.margin-top-init__xl,.margin-y-init__xl{margin-top:initial !important}.margin-right-init__xl,.margin-x-init__xl{margin-right:initial !important}.margin-bottom-init__xl,.margin-y-init__xl{margin-bottom:initial !important}.margin-left-init__xl,.margin-x-init__xl{margin-left:initial !important}.padding-init__xl{padding:initial !important}.padding-top-init__xl,.padding-y-init__xl{padding-top:initial !important}.padding-right-init__xl,.padding-x-init__xl{padding-right:initial !important}.padding-bottom-init__xl,.padding-y-init__xl{padding-bottom:initial !important}.padding-left-init__xl,.padding-x-init__xl{padding-left:initial !important}}
        /*# sourceMappingURL=xmutarn.min.css.map */        
        """);

    #endregion
}
