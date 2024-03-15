namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de exibição do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class DisplayCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".display-none{display:none !important}.display-inline{display:inline !important}.display-inline-block{display:inline-block !important}.display-block{display:block !important}.display-table{display:table !important}.display-table-row{display:table-row !important}.display-table-cell{display:table-cell !important}.display-flex{display:flex !important}.display-inline-flex{display:inline-flex !important}@media(min-width: 576px){.display-none__sm{display:none !important}.display-inline__sm{display:inline !important}.display-inline-block__sm{display:inline-block !important}.display-block__sm{display:block !important}.display-table__sm{display:table !important}.display-table-row__sm{display:table-row !important}.display-table-cell__sm{display:table-cell !important}.display-flex__sm{display:flex !important}.display-inline-flex__sm{display:inline-flex !important}}@media(min-width: 768px){.display-none__md{display:none !important}.display-inline__md{display:inline !important}.display-inline-block__md{display:inline-block !important}.display-block__md{display:block !important}.display-table__md{display:table !important}.display-table-row__md{display:table-row !important}.display-table-cell__md{display:table-cell !important}.display-flex__md{display:flex !important}.display-inline-flex__md{display:inline-flex !important}}@media(min-width: 992px){.display-none__lg{display:none !important}.display-inline__lg{display:inline !important}.display-inline-block__lg{display:inline-block !important}.display-block__lg{display:block !important}.display-table__lg{display:table !important}.display-table-row__lg{display:table-row !important}.display-table-cell__lg{display:table-cell !important}.display-flex__lg{display:flex !important}.display-inline-flex__lg{display:inline-flex !important}}@media(min-width: 1200px){.display-none__xl{display:none !important}.display-inline__xl{display:inline !important}.display-inline-block__xl{display:inline-block !important}.display-block__xl{display:block !important}.display-table__xl{display:table !important}.display-table-row__xl{display:table-row !important}.display-table-cell__xl{display:table-cell !important}.display-flex__xl{display:flex !important}.display-inline-flex__xl{display:inline-flex !important}}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
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
        """);
}
