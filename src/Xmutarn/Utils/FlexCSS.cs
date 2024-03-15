namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de flex do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class FlexCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".flex-col-auto{width:auto;max-width:none;flex:0 0 auto}.flex-order-0{order:0}.flex-col-1{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1{margin-left:8.3333333333%}.flex-order-1{order:1}.flex-col-2{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2{margin-left:16.6666666667%}.flex-order-2{order:2}.flex-col-3{max-width:25%;flex:0 0 25%}.flex-offset-3{margin-left:25%}.flex-order-3{order:3}.flex-col-4{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4{margin-left:33.3333333333%}.flex-order-4{order:4}.flex-col-5{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5{margin-left:41.6666666667%}.flex-order-5{order:5}.flex-col-6{max-width:50%;flex:0 0 50%}.flex-offset-6{margin-left:50%}.flex-order-6{order:6}.flex-col-7{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7{margin-left:58.3333333333%}.flex-order-7{order:7}.flex-col-8{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8{margin-left:66.6666666667%}.flex-order-8{order:8}.flex-col-9{max-width:75%;flex:0 0 75%}.flex-offset-9{margin-left:75%}.flex-order-9{order:9}.flex-col-10{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10{margin-left:83.3333333333%}.flex-order-10{order:10}.flex-col-11{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11{margin-left:91.6666666667%}.flex-order-11{order:11}.flex-col-12{max-width:100%;flex:0 0 100%}.flex-order-12{order:12}@media(min-width: 576px){.flex-col-auto__sm{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__sm{order:0}.flex-col-1__sm{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__sm{margin-left:8.3333333333%}.flex-order-1__sm{order:1}.flex-col-2__sm{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__sm{margin-left:16.6666666667%}.flex-order-2__sm{order:2}.flex-col-3__sm{max-width:25%;flex:0 0 25%}.flex-offset-3__sm{margin-left:25%}.flex-order-3__sm{order:3}.flex-col-4__sm{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__sm{margin-left:33.3333333333%}.flex-order-4__sm{order:4}.flex-col-5__sm{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__sm{margin-left:41.6666666667%}.flex-order-5__sm{order:5}.flex-col-6__sm{max-width:50%;flex:0 0 50%}.flex-offset-6__sm{margin-left:50%}.flex-order-6__sm{order:6}.flex-col-7__sm{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__sm{margin-left:58.3333333333%}.flex-order-7__sm{order:7}.flex-col-8__sm{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__sm{margin-left:66.6666666667%}.flex-order-8__sm{order:8}.flex-col-9__sm{max-width:75%;flex:0 0 75%}.flex-offset-9__sm{margin-left:75%}.flex-order-9__sm{order:9}.flex-col-10__sm{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__sm{margin-left:83.3333333333%}.flex-order-10__sm{order:10}.flex-col-11__sm{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__sm{margin-left:91.6666666667%}.flex-order-11__sm{order:11}.flex-col-12__sm{max-width:100%;flex:0 0 100%}.flex-order-12__sm{order:12}}@media(min-width: 768px){.flex-col-auto__md{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__md{order:0}.flex-col-1__md{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__md{margin-left:8.3333333333%}.flex-order-1__md{order:1}.flex-col-2__md{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__md{margin-left:16.6666666667%}.flex-order-2__md{order:2}.flex-col-3__md{max-width:25%;flex:0 0 25%}.flex-offset-3__md{margin-left:25%}.flex-order-3__md{order:3}.flex-col-4__md{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__md{margin-left:33.3333333333%}.flex-order-4__md{order:4}.flex-col-5__md{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__md{margin-left:41.6666666667%}.flex-order-5__md{order:5}.flex-col-6__md{max-width:50%;flex:0 0 50%}.flex-offset-6__md{margin-left:50%}.flex-order-6__md{order:6}.flex-col-7__md{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__md{margin-left:58.3333333333%}.flex-order-7__md{order:7}.flex-col-8__md{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__md{margin-left:66.6666666667%}.flex-order-8__md{order:8}.flex-col-9__md{max-width:75%;flex:0 0 75%}.flex-offset-9__md{margin-left:75%}.flex-order-9__md{order:9}.flex-col-10__md{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__md{margin-left:83.3333333333%}.flex-order-10__md{order:10}.flex-col-11__md{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__md{margin-left:91.6666666667%}.flex-order-11__md{order:11}.flex-col-12__md{max-width:100%;flex:0 0 100%}.flex-order-12__md{order:12}}@media(min-width: 992px){.flex-col-auto__lg{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__lg{order:0}.flex-col-1__lg{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__lg{margin-left:8.3333333333%}.flex-order-1__lg{order:1}.flex-col-2__lg{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__lg{margin-left:16.6666666667%}.flex-order-2__lg{order:2}.flex-col-3__lg{max-width:25%;flex:0 0 25%}.flex-offset-3__lg{margin-left:25%}.flex-order-3__lg{order:3}.flex-col-4__lg{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__lg{margin-left:33.3333333333%}.flex-order-4__lg{order:4}.flex-col-5__lg{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__lg{margin-left:41.6666666667%}.flex-order-5__lg{order:5}.flex-col-6__lg{max-width:50%;flex:0 0 50%}.flex-offset-6__lg{margin-left:50%}.flex-order-6__lg{order:6}.flex-col-7__lg{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__lg{margin-left:58.3333333333%}.flex-order-7__lg{order:7}.flex-col-8__lg{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__lg{margin-left:66.6666666667%}.flex-order-8__lg{order:8}.flex-col-9__lg{max-width:75%;flex:0 0 75%}.flex-offset-9__lg{margin-left:75%}.flex-order-9__lg{order:9}.flex-col-10__lg{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__lg{margin-left:83.3333333333%}.flex-order-10__lg{order:10}.flex-col-11__lg{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__lg{margin-left:91.6666666667%}.flex-order-11__lg{order:11}.flex-col-12__lg{max-width:100%;flex:0 0 100%}.flex-order-12__lg{order:12}}@media(min-width: 1200px){.flex-col-auto__xl{width:auto;max-width:none;flex:0 0 auto}.flex-order-0__xl{order:0}.flex-col-1__xl{max-width:8.3333333333%;flex:0 0 8.3333333333%}.flex-offset-1__xl{margin-left:8.3333333333%}.flex-order-1__xl{order:1}.flex-col-2__xl{max-width:16.6666666667%;flex:0 0 16.6666666667%}.flex-offset-2__xl{margin-left:16.6666666667%}.flex-order-2__xl{order:2}.flex-col-3__xl{max-width:25%;flex:0 0 25%}.flex-offset-3__xl{margin-left:25%}.flex-order-3__xl{order:3}.flex-col-4__xl{max-width:33.3333333333%;flex:0 0 33.3333333333%}.flex-offset-4__xl{margin-left:33.3333333333%}.flex-order-4__xl{order:4}.flex-col-5__xl{max-width:41.6666666667%;flex:0 0 41.6666666667%}.flex-offset-5__xl{margin-left:41.6666666667%}.flex-order-5__xl{order:5}.flex-col-6__xl{max-width:50%;flex:0 0 50%}.flex-offset-6__xl{margin-left:50%}.flex-order-6__xl{order:6}.flex-col-7__xl{max-width:58.3333333333%;flex:0 0 58.3333333333%}.flex-offset-7__xl{margin-left:58.3333333333%}.flex-order-7__xl{order:7}.flex-col-8__xl{max-width:66.6666666667%;flex:0 0 66.6666666667%}.flex-offset-8__xl{margin-left:66.6666666667%}.flex-order-8__xl{order:8}.flex-col-9__xl{max-width:75%;flex:0 0 75%}.flex-offset-9__xl{margin-left:75%}.flex-order-9__xl{order:9}.flex-col-10__xl{max-width:83.3333333333%;flex:0 0 83.3333333333%}.flex-offset-10__xl{margin-left:83.3333333333%}.flex-order-10__xl{order:10}.flex-col-11__xl{max-width:91.6666666667%;flex:0 0 91.6666666667%}.flex-offset-11__xl{margin-left:91.6666666667%}.flex-order-11__xl{order:11}.flex-col-12__xl{max-width:100%;flex:0 0 100%}.flex-order-12__xl{order:12}}.flex-dir-row{flex-direction:row}.flex-dir-column{flex-direction:column}.flex-dir-row-reverse{flex-direction:row-reverse}.flex-dir-column-reverse{flex-direction:column-reverse}.flex-content-start{justify-content:flex-start}.flex-content-end{justify-content:flex-end}.flex-content-center{justify-content:center}.flex-content-around{justify-content:space-around}.flex-content-between{justify-content:space-between}.flex-items-start{align-items:flex-start}.flex-items-end{align-items:flex-end}.flex-items-center{align-items:center}.flex-items-stretch{align-items:stretch}.flex-items-baseline{align-items:baseline}@media(min-width: 576px){.flex-dir-row__sm{flex-direction:row}.flex-dir-column__sm{flex-direction:column}.flex-dir-row-reverse__sm{flex-direction:row-reverse}.flex-dir-column-reverse__sm{flex-direction:column-reverse}.flex-content-start__sm{justify-content:flex-start}.flex-content-end__sm{justify-content:flex-end}.flex-content-center__sm{justify-content:center}.flex-content-around__sm{justify-content:space-around}.flex-content-between__sm{justify-content:space-between}.flex-items-start__sm{align-items:flex-start}.flex-items-end__sm{align-items:flex-end}.flex-items-center__sm{align-items:center}.flex-items-stretch__sm{align-items:stretch}.flex-items-baseline__sm{align-items:baseline}}@media(min-width: 768px){.flex-dir-row__md{flex-direction:row}.flex-dir-column__md{flex-direction:column}.flex-dir-row-reverse__md{flex-direction:row-reverse}.flex-dir-column-reverse__md{flex-direction:column-reverse}.flex-content-start__md{justify-content:flex-start}.flex-content-end__md{justify-content:flex-end}.flex-content-center__md{justify-content:center}.flex-content-around__md{justify-content:space-around}.flex-content-between__md{justify-content:space-between}.flex-items-start__md{align-items:flex-start}.flex-items-end__md{align-items:flex-end}.flex-items-center__md{align-items:center}.flex-items-stretch__md{align-items:stretch}.flex-items-baseline__md{align-items:baseline}}@media(min-width: 992px){.flex-dir-row__lg{flex-direction:row}.flex-dir-column__lg{flex-direction:column}.flex-dir-row-reverse__lg{flex-direction:row-reverse}.flex-dir-column-reverse__lg{flex-direction:column-reverse}.flex-content-start__lg{justify-content:flex-start}.flex-content-end__lg{justify-content:flex-end}.flex-content-center__lg{justify-content:center}.flex-content-around__lg{justify-content:space-around}.flex-content-between__lg{justify-content:space-between}.flex-items-start__lg{align-items:flex-start}.flex-items-end__lg{align-items:flex-end}.flex-items-center__lg{align-items:center}.flex-items-stretch__lg{align-items:stretch}.flex-items-baseline__lg{align-items:baseline}}@media(min-width: 1200px){.flex-dir-row__xl{flex-direction:row}.flex-dir-column__xl{flex-direction:column}.flex-dir-row-reverse__xl{flex-direction:row-reverse}.flex-dir-column-reverse__xl{flex-direction:column-reverse}.flex-content-start__xl{justify-content:flex-start}.flex-content-end__xl{justify-content:flex-end}.flex-content-center__xl{justify-content:center}.flex-content-around__xl{justify-content:space-around}.flex-content-between__xl{justify-content:space-between}.flex-items-start__xl{align-items:flex-start}.flex-items-end__xl{align-items:flex-end}.flex-items-center__xl{align-items:center}.flex-items-stretch__xl{align-items:stretch}.flex-items-baseline__xl{align-items:baseline}}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
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
        """);
}
