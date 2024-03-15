namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de espaçamento do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class SpacingCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".margin-0{margin:0 !important}.margin-top-0,.margin-y-0{margin-top:0 !important}.margin-right-0,.margin-x-0{margin-right:0 !important}.margin-bottom-0,.margin-y-0{margin-bottom:0 !important}.margin-left-0,.margin-x-0{margin-left:0 !important}.padding-0{padding:0 !important}.padding-top-0,.padding-y-0{padding-top:0 !important}.padding-right-0,.padding-x-0{padding-right:0 !important}.padding-bottom-0,.padding-y-0{padding-bottom:0 !important}.padding-left-0,.padding-x-0{padding-left:0 !important}.margin-xs{margin:0.25rem !important}.margin-top-xs,.margin-y-xs{margin-top:0.25rem !important}.margin-right-xs,.margin-x-xs{margin-right:0.25rem !important}.margin-bottom-xs,.margin-y-xs{margin-bottom:0.25rem !important}.margin-left-xs,.margin-x-xs{margin-left:0.25rem !important}.padding-xs{padding:0.25rem !important}.padding-top-xs,.padding-y-xs{padding-top:0.25rem !important}.padding-right-xs,.padding-x-xs{padding-right:0.25rem !important}.padding-bottom-xs,.padding-y-xs{padding-bottom:0.25rem !important}.padding-left-xs,.padding-x-xs{padding-left:0.25rem !important}.margin-sm{margin:0.5rem !important}.margin-top-sm,.margin-y-sm{margin-top:0.5rem !important}.margin-right-sm,.margin-x-sm{margin-right:0.5rem !important}.margin-bottom-sm,.margin-y-sm{margin-bottom:0.5rem !important}.margin-left-sm,.margin-x-sm{margin-left:0.5rem !important}.padding-sm{padding:0.5rem !important}.padding-top-sm,.padding-y-sm{padding-top:0.5rem !important}.padding-right-sm,.padding-x-sm{padding-right:0.5rem !important}.padding-bottom-sm,.padding-y-sm{padding-bottom:0.5rem !important}.padding-left-sm,.padding-x-sm{padding-left:0.5rem !important}.margin-md{margin:1rem !important}.margin-top-md,.margin-y-md{margin-top:1rem !important}.margin-right-md,.margin-x-md{margin-right:1rem !important}.margin-bottom-md,.margin-y-md{margin-bottom:1rem !important}.margin-left-md,.margin-x-md{margin-left:1rem !important}.padding-md{padding:1rem !important}.padding-top-md,.padding-y-md{padding-top:1rem !important}.padding-right-md,.padding-x-md{padding-right:1rem !important}.padding-bottom-md,.padding-y-md{padding-bottom:1rem !important}.padding-left-md,.padding-x-md{padding-left:1rem !important}.margin-lg{margin:1.5rem !important}.margin-top-lg,.margin-y-lg{margin-top:1.5rem !important}.margin-right-lg,.margin-x-lg{margin-right:1.5rem !important}.margin-bottom-lg,.margin-y-lg{margin-bottom:1.5rem !important}.margin-left-lg,.margin-x-lg{margin-left:1.5rem !important}.padding-lg{padding:1.5rem !important}.padding-top-lg,.padding-y-lg{padding-top:1.5rem !important}.padding-right-lg,.padding-x-lg{padding-right:1.5rem !important}.padding-bottom-lg,.padding-y-lg{padding-bottom:1.5rem !important}.padding-left-lg,.padding-x-lg{padding-left:1.5rem !important}.margin-xl{margin:3rem !important}.margin-top-xl,.margin-y-xl{margin-top:3rem !important}.margin-right-xl,.margin-x-xl{margin-right:3rem !important}.margin-bottom-xl,.margin-y-xl{margin-bottom:3rem !important}.margin-left-xl,.margin-x-xl{margin-left:3rem !important}.padding-xl{padding:3rem !important}.padding-top-xl,.padding-y-xl{padding-top:3rem !important}.padding-right-xl,.padding-x-xl{padding-right:3rem !important}.padding-bottom-xl,.padding-y-xl{padding-bottom:3rem !important}.padding-left-xl,.padding-x-xl{padding-left:3rem !important}.margin-auto{margin:auto !important}.margin-top-auto,.margin-y-auto{margin-top:auto !important}.margin-right-auto,.margin-x-auto{margin-right:auto !important}.margin-bottom-auto,.margin-y-auto{margin-bottom:auto !important}.margin-left-auto,.margin-x-auto{margin-left:auto !important}.margin-init{margin:initial !important}.margin-top-init,.margin-y-init{margin-top:initial !important}.margin-right-init,.margin-x-init{margin-right:initial !important}.margin-bottom-init,.margin-y-init{margin-bottom:initial !important}.margin-left-init,.margin-x-init{margin-left:initial !important}.padding-init{padding:initial !important}.padding-top-init,.padding-y-init{padding-top:initial !important}.padding-right-init,.padding-x-init{padding-right:initial !important}.padding-bottom-init,.padding-y-init{padding-bottom:initial !important}.padding-left-init,.padding-x-init{padding-left:initial !important}@media(min-width: 576px){.margin-0__sm{margin:0 !important}.margin-top-0__sm,.margin-y-0__sm{margin-top:0 !important}.margin-right-0__sm,.margin-x-0__sm{margin-right:0 !important}.margin-bottom-0__sm,.margin-y-0__sm{margin-bottom:0 !important}.margin-left-0__sm,.margin-x-0__sm{margin-left:0 !important}.padding-0__sm{padding:0 !important}.padding-top-0__sm,.padding-y-0__sm{padding-top:0 !important}.padding-right-0__sm,.padding-x-0__sm{padding-right:0 !important}.padding-bottom-0__sm,.padding-y-0__sm{padding-bottom:0 !important}.padding-left-0__sm,.padding-x-0__sm{padding-left:0 !important}.margin-xs__sm{margin:0.25rem !important}.margin-top-xs__sm,.margin-y-xs__sm{margin-top:0.25rem !important}.margin-right-xs__sm,.margin-x-xs__sm{margin-right:0.25rem !important}.margin-bottom-xs__sm,.margin-y-xs__sm{margin-bottom:0.25rem !important}.margin-left-xs__sm,.margin-x-xs__sm{margin-left:0.25rem !important}.padding-xs__sm{padding:0.25rem !important}.padding-top-xs__sm,.padding-y-xs__sm{padding-top:0.25rem !important}.padding-right-xs__sm,.padding-x-xs__sm{padding-right:0.25rem !important}.padding-bottom-xs__sm,.padding-y-xs__sm{padding-bottom:0.25rem !important}.padding-left-xs__sm,.padding-x-xs__sm{padding-left:0.25rem !important}.margin-sm__sm{margin:0.5rem !important}.margin-top-sm__sm,.margin-y-sm__sm{margin-top:0.5rem !important}.margin-right-sm__sm,.margin-x-sm__sm{margin-right:0.5rem !important}.margin-bottom-sm__sm,.margin-y-sm__sm{margin-bottom:0.5rem !important}.margin-left-sm__sm,.margin-x-sm__sm{margin-left:0.5rem !important}.padding-sm__sm{padding:0.5rem !important}.padding-top-sm__sm,.padding-y-sm__sm{padding-top:0.5rem !important}.padding-right-sm__sm,.padding-x-sm__sm{padding-right:0.5rem !important}.padding-bottom-sm__sm,.padding-y-sm__sm{padding-bottom:0.5rem !important}.padding-left-sm__sm,.padding-x-sm__sm{padding-left:0.5rem !important}.margin-md__sm{margin:1rem !important}.margin-top-md__sm,.margin-y-md__sm{margin-top:1rem !important}.margin-right-md__sm,.margin-x-md__sm{margin-right:1rem !important}.margin-bottom-md__sm,.margin-y-md__sm{margin-bottom:1rem !important}.margin-left-md__sm,.margin-x-md__sm{margin-left:1rem !important}.padding-md__sm{padding:1rem !important}.padding-top-md__sm,.padding-y-md__sm{padding-top:1rem !important}.padding-right-md__sm,.padding-x-md__sm{padding-right:1rem !important}.padding-bottom-md__sm,.padding-y-md__sm{padding-bottom:1rem !important}.padding-left-md__sm,.padding-x-md__sm{padding-left:1rem !important}.margin-lg__sm{margin:1.5rem !important}.margin-top-lg__sm,.margin-y-lg__sm{margin-top:1.5rem !important}.margin-right-lg__sm,.margin-x-lg__sm{margin-right:1.5rem !important}.margin-bottom-lg__sm,.margin-y-lg__sm{margin-bottom:1.5rem !important}.margin-left-lg__sm,.margin-x-lg__sm{margin-left:1.5rem !important}.padding-lg__sm{padding:1.5rem !important}.padding-top-lg__sm,.padding-y-lg__sm{padding-top:1.5rem !important}.padding-right-lg__sm,.padding-x-lg__sm{padding-right:1.5rem !important}.padding-bottom-lg__sm,.padding-y-lg__sm{padding-bottom:1.5rem !important}.padding-left-lg__sm,.padding-x-lg__sm{padding-left:1.5rem !important}.margin-xl__sm{margin:3rem !important}.margin-top-xl__sm,.margin-y-xl__sm{margin-top:3rem !important}.margin-right-xl__sm,.margin-x-xl__sm{margin-right:3rem !important}.margin-bottom-xl__sm,.margin-y-xl__sm{margin-bottom:3rem !important}.margin-left-xl__sm,.margin-x-xl__sm{margin-left:3rem !important}.padding-xl__sm{padding:3rem !important}.padding-top-xl__sm,.padding-y-xl__sm{padding-top:3rem !important}.padding-right-xl__sm,.padding-x-xl__sm{padding-right:3rem !important}.padding-bottom-xl__sm,.padding-y-xl__sm{padding-bottom:3rem !important}.padding-left-xl__sm,.padding-x-xl__sm{padding-left:3rem !important}.margin-auto__sm{margin:auto !important}.margin-top-auto__sm,.margin-y-auto__sm{margin-top:auto !important}.margin-right-auto__sm,.margin-x-auto__sm{margin-right:auto !important}.margin-bottom-auto__sm,.margin-y-auto__sm{margin-bottom:auto !important}.margin-left-auto__sm,.margin-x-auto__sm{margin-left:auto !important}.margin-init__sm{margin:initial !important}.margin-top-init__sm,.margin-y-init__sm{margin-top:initial !important}.margin-right-init__sm,.margin-x-init__sm{margin-right:initial !important}.margin-bottom-init__sm,.margin-y-init__sm{margin-bottom:initial !important}.margin-left-init__sm,.margin-x-init__sm{margin-left:initial !important}.padding-init__sm{padding:initial !important}.padding-top-init__sm,.padding-y-init__sm{padding-top:initial !important}.padding-right-init__sm,.padding-x-init__sm{padding-right:initial !important}.padding-bottom-init__sm,.padding-y-init__sm{padding-bottom:initial !important}.padding-left-init__sm,.padding-x-init__sm{padding-left:initial !important}}@media(min-width: 768px){.margin-0__md{margin:0 !important}.margin-top-0__md,.margin-y-0__md{margin-top:0 !important}.margin-right-0__md,.margin-x-0__md{margin-right:0 !important}.margin-bottom-0__md,.margin-y-0__md{margin-bottom:0 !important}.margin-left-0__md,.margin-x-0__md{margin-left:0 !important}.padding-0__md{padding:0 !important}.padding-top-0__md,.padding-y-0__md{padding-top:0 !important}.padding-right-0__md,.padding-x-0__md{padding-right:0 !important}.padding-bottom-0__md,.padding-y-0__md{padding-bottom:0 !important}.padding-left-0__md,.padding-x-0__md{padding-left:0 !important}.margin-xs__md{margin:0.25rem !important}.margin-top-xs__md,.margin-y-xs__md{margin-top:0.25rem !important}.margin-right-xs__md,.margin-x-xs__md{margin-right:0.25rem !important}.margin-bottom-xs__md,.margin-y-xs__md{margin-bottom:0.25rem !important}.margin-left-xs__md,.margin-x-xs__md{margin-left:0.25rem !important}.padding-xs__md{padding:0.25rem !important}.padding-top-xs__md,.padding-y-xs__md{padding-top:0.25rem !important}.padding-right-xs__md,.padding-x-xs__md{padding-right:0.25rem !important}.padding-bottom-xs__md,.padding-y-xs__md{padding-bottom:0.25rem !important}.padding-left-xs__md,.padding-x-xs__md{padding-left:0.25rem !important}.margin-sm__md{margin:0.5rem !important}.margin-top-sm__md,.margin-y-sm__md{margin-top:0.5rem !important}.margin-right-sm__md,.margin-x-sm__md{margin-right:0.5rem !important}.margin-bottom-sm__md,.margin-y-sm__md{margin-bottom:0.5rem !important}.margin-left-sm__md,.margin-x-sm__md{margin-left:0.5rem !important}.padding-sm__md{padding:0.5rem !important}.padding-top-sm__md,.padding-y-sm__md{padding-top:0.5rem !important}.padding-right-sm__md,.padding-x-sm__md{padding-right:0.5rem !important}.padding-bottom-sm__md,.padding-y-sm__md{padding-bottom:0.5rem !important}.padding-left-sm__md,.padding-x-sm__md{padding-left:0.5rem !important}.margin-md__md{margin:1rem !important}.margin-top-md__md,.margin-y-md__md{margin-top:1rem !important}.margin-right-md__md,.margin-x-md__md{margin-right:1rem !important}.margin-bottom-md__md,.margin-y-md__md{margin-bottom:1rem !important}.margin-left-md__md,.margin-x-md__md{margin-left:1rem !important}.padding-md__md{padding:1rem !important}.padding-top-md__md,.padding-y-md__md{padding-top:1rem !important}.padding-right-md__md,.padding-x-md__md{padding-right:1rem !important}.padding-bottom-md__md,.padding-y-md__md{padding-bottom:1rem !important}.padding-left-md__md,.padding-x-md__md{padding-left:1rem !important}.margin-lg__md{margin:1.5rem !important}.margin-top-lg__md,.margin-y-lg__md{margin-top:1.5rem !important}.margin-right-lg__md,.margin-x-lg__md{margin-right:1.5rem !important}.margin-bottom-lg__md,.margin-y-lg__md{margin-bottom:1.5rem !important}.margin-left-lg__md,.margin-x-lg__md{margin-left:1.5rem !important}.padding-lg__md{padding:1.5rem !important}.padding-top-lg__md,.padding-y-lg__md{padding-top:1.5rem !important}.padding-right-lg__md,.padding-x-lg__md{padding-right:1.5rem !important}.padding-bottom-lg__md,.padding-y-lg__md{padding-bottom:1.5rem !important}.padding-left-lg__md,.padding-x-lg__md{padding-left:1.5rem !important}.margin-xl__md{margin:3rem !important}.margin-top-xl__md,.margin-y-xl__md{margin-top:3rem !important}.margin-right-xl__md,.margin-x-xl__md{margin-right:3rem !important}.margin-bottom-xl__md,.margin-y-xl__md{margin-bottom:3rem !important}.margin-left-xl__md,.margin-x-xl__md{margin-left:3rem !important}.padding-xl__md{padding:3rem !important}.padding-top-xl__md,.padding-y-xl__md{padding-top:3rem !important}.padding-right-xl__md,.padding-x-xl__md{padding-right:3rem !important}.padding-bottom-xl__md,.padding-y-xl__md{padding-bottom:3rem !important}.padding-left-xl__md,.padding-x-xl__md{padding-left:3rem !important}.margin-auto__md{margin:auto !important}.margin-top-auto__md,.margin-y-auto__md{margin-top:auto !important}.margin-right-auto__md,.margin-x-auto__md{margin-right:auto !important}.margin-bottom-auto__md,.margin-y-auto__md{margin-bottom:auto !important}.margin-left-auto__md,.margin-x-auto__md{margin-left:auto !important}.margin-init__md{margin:initial !important}.margin-top-init__md,.margin-y-init__md{margin-top:initial !important}.margin-right-init__md,.margin-x-init__md{margin-right:initial !important}.margin-bottom-init__md,.margin-y-init__md{margin-bottom:initial !important}.margin-left-init__md,.margin-x-init__md{margin-left:initial !important}.padding-init__md{padding:initial !important}.padding-top-init__md,.padding-y-init__md{padding-top:initial !important}.padding-right-init__md,.padding-x-init__md{padding-right:initial !important}.padding-bottom-init__md,.padding-y-init__md{padding-bottom:initial !important}.padding-left-init__md,.padding-x-init__md{padding-left:initial !important}}@media(min-width: 992px){.margin-0__lg{margin:0 !important}.margin-top-0__lg,.margin-y-0__lg{margin-top:0 !important}.margin-right-0__lg,.margin-x-0__lg{margin-right:0 !important}.margin-bottom-0__lg,.margin-y-0__lg{margin-bottom:0 !important}.margin-left-0__lg,.margin-x-0__lg{margin-left:0 !important}.padding-0__lg{padding:0 !important}.padding-top-0__lg,.padding-y-0__lg{padding-top:0 !important}.padding-right-0__lg,.padding-x-0__lg{padding-right:0 !important}.padding-bottom-0__lg,.padding-y-0__lg{padding-bottom:0 !important}.padding-left-0__lg,.padding-x-0__lg{padding-left:0 !important}.margin-xs__lg{margin:0.25rem !important}.margin-top-xs__lg,.margin-y-xs__lg{margin-top:0.25rem !important}.margin-right-xs__lg,.margin-x-xs__lg{margin-right:0.25rem !important}.margin-bottom-xs__lg,.margin-y-xs__lg{margin-bottom:0.25rem !important}.margin-left-xs__lg,.margin-x-xs__lg{margin-left:0.25rem !important}.padding-xs__lg{padding:0.25rem !important}.padding-top-xs__lg,.padding-y-xs__lg{padding-top:0.25rem !important}.padding-right-xs__lg,.padding-x-xs__lg{padding-right:0.25rem !important}.padding-bottom-xs__lg,.padding-y-xs__lg{padding-bottom:0.25rem !important}.padding-left-xs__lg,.padding-x-xs__lg{padding-left:0.25rem !important}.margin-sm__lg{margin:0.5rem !important}.margin-top-sm__lg,.margin-y-sm__lg{margin-top:0.5rem !important}.margin-right-sm__lg,.margin-x-sm__lg{margin-right:0.5rem !important}.margin-bottom-sm__lg,.margin-y-sm__lg{margin-bottom:0.5rem !important}.margin-left-sm__lg,.margin-x-sm__lg{margin-left:0.5rem !important}.padding-sm__lg{padding:0.5rem !important}.padding-top-sm__lg,.padding-y-sm__lg{padding-top:0.5rem !important}.padding-right-sm__lg,.padding-x-sm__lg{padding-right:0.5rem !important}.padding-bottom-sm__lg,.padding-y-sm__lg{padding-bottom:0.5rem !important}.padding-left-sm__lg,.padding-x-sm__lg{padding-left:0.5rem !important}.margin-md__lg{margin:1rem !important}.margin-top-md__lg,.margin-y-md__lg{margin-top:1rem !important}.margin-right-md__lg,.margin-x-md__lg{margin-right:1rem !important}.margin-bottom-md__lg,.margin-y-md__lg{margin-bottom:1rem !important}.margin-left-md__lg,.margin-x-md__lg{margin-left:1rem !important}.padding-md__lg{padding:1rem !important}.padding-top-md__lg,.padding-y-md__lg{padding-top:1rem !important}.padding-right-md__lg,.padding-x-md__lg{padding-right:1rem !important}.padding-bottom-md__lg,.padding-y-md__lg{padding-bottom:1rem !important}.padding-left-md__lg,.padding-x-md__lg{padding-left:1rem !important}.margin-lg__lg{margin:1.5rem !important}.margin-top-lg__lg,.margin-y-lg__lg{margin-top:1.5rem !important}.margin-right-lg__lg,.margin-x-lg__lg{margin-right:1.5rem !important}.margin-bottom-lg__lg,.margin-y-lg__lg{margin-bottom:1.5rem !important}.margin-left-lg__lg,.margin-x-lg__lg{margin-left:1.5rem !important}.padding-lg__lg{padding:1.5rem !important}.padding-top-lg__lg,.padding-y-lg__lg{padding-top:1.5rem !important}.padding-right-lg__lg,.padding-x-lg__lg{padding-right:1.5rem !important}.padding-bottom-lg__lg,.padding-y-lg__lg{padding-bottom:1.5rem !important}.padding-left-lg__lg,.padding-x-lg__lg{padding-left:1.5rem !important}.margin-xl__lg{margin:3rem !important}.margin-top-xl__lg,.margin-y-xl__lg{margin-top:3rem !important}.margin-right-xl__lg,.margin-x-xl__lg{margin-right:3rem !important}.margin-bottom-xl__lg,.margin-y-xl__lg{margin-bottom:3rem !important}.margin-left-xl__lg,.margin-x-xl__lg{margin-left:3rem !important}.padding-xl__lg{padding:3rem !important}.padding-top-xl__lg,.padding-y-xl__lg{padding-top:3rem !important}.padding-right-xl__lg,.padding-x-xl__lg{padding-right:3rem !important}.padding-bottom-xl__lg,.padding-y-xl__lg{padding-bottom:3rem !important}.padding-left-xl__lg,.padding-x-xl__lg{padding-left:3rem !important}.margin-auto__lg{margin:auto !important}.margin-top-auto__lg,.margin-y-auto__lg{margin-top:auto !important}.margin-right-auto__lg,.margin-x-auto__lg{margin-right:auto !important}.margin-bottom-auto__lg,.margin-y-auto__lg{margin-bottom:auto !important}.margin-left-auto__lg,.margin-x-auto__lg{margin-left:auto !important}.margin-init__lg{margin:initial !important}.margin-top-init__lg,.margin-y-init__lg{margin-top:initial !important}.margin-right-init__lg,.margin-x-init__lg{margin-right:initial !important}.margin-bottom-init__lg,.margin-y-init__lg{margin-bottom:initial !important}.margin-left-init__lg,.margin-x-init__lg{margin-left:initial !important}.padding-init__lg{padding:initial !important}.padding-top-init__lg,.padding-y-init__lg{padding-top:initial !important}.padding-right-init__lg,.padding-x-init__lg{padding-right:initial !important}.padding-bottom-init__lg,.padding-y-init__lg{padding-bottom:initial !important}.padding-left-init__lg,.padding-x-init__lg{padding-left:initial !important}}@media(min-width: 1200px){.margin-0__xl{margin:0 !important}.margin-top-0__xl,.margin-y-0__xl{margin-top:0 !important}.margin-right-0__xl,.margin-x-0__xl{margin-right:0 !important}.margin-bottom-0__xl,.margin-y-0__xl{margin-bottom:0 !important}.margin-left-0__xl,.margin-x-0__xl{margin-left:0 !important}.padding-0__xl{padding:0 !important}.padding-top-0__xl,.padding-y-0__xl{padding-top:0 !important}.padding-right-0__xl,.padding-x-0__xl{padding-right:0 !important}.padding-bottom-0__xl,.padding-y-0__xl{padding-bottom:0 !important}.padding-left-0__xl,.padding-x-0__xl{padding-left:0 !important}.margin-xs__xl{margin:0.25rem !important}.margin-top-xs__xl,.margin-y-xs__xl{margin-top:0.25rem !important}.margin-right-xs__xl,.margin-x-xs__xl{margin-right:0.25rem !important}.margin-bottom-xs__xl,.margin-y-xs__xl{margin-bottom:0.25rem !important}.margin-left-xs__xl,.margin-x-xs__xl{margin-left:0.25rem !important}.padding-xs__xl{padding:0.25rem !important}.padding-top-xs__xl,.padding-y-xs__xl{padding-top:0.25rem !important}.padding-right-xs__xl,.padding-x-xs__xl{padding-right:0.25rem !important}.padding-bottom-xs__xl,.padding-y-xs__xl{padding-bottom:0.25rem !important}.padding-left-xs__xl,.padding-x-xs__xl{padding-left:0.25rem !important}.margin-sm__xl{margin:0.5rem !important}.margin-top-sm__xl,.margin-y-sm__xl{margin-top:0.5rem !important}.margin-right-sm__xl,.margin-x-sm__xl{margin-right:0.5rem !important}.margin-bottom-sm__xl,.margin-y-sm__xl{margin-bottom:0.5rem !important}.margin-left-sm__xl,.margin-x-sm__xl{margin-left:0.5rem !important}.padding-sm__xl{padding:0.5rem !important}.padding-top-sm__xl,.padding-y-sm__xl{padding-top:0.5rem !important}.padding-right-sm__xl,.padding-x-sm__xl{padding-right:0.5rem !important}.padding-bottom-sm__xl,.padding-y-sm__xl{padding-bottom:0.5rem !important}.padding-left-sm__xl,.padding-x-sm__xl{padding-left:0.5rem !important}.margin-md__xl{margin:1rem !important}.margin-top-md__xl,.margin-y-md__xl{margin-top:1rem !important}.margin-right-md__xl,.margin-x-md__xl{margin-right:1rem !important}.margin-bottom-md__xl,.margin-y-md__xl{margin-bottom:1rem !important}.margin-left-md__xl,.margin-x-md__xl{margin-left:1rem !important}.padding-md__xl{padding:1rem !important}.padding-top-md__xl,.padding-y-md__xl{padding-top:1rem !important}.padding-right-md__xl,.padding-x-md__xl{padding-right:1rem !important}.padding-bottom-md__xl,.padding-y-md__xl{padding-bottom:1rem !important}.padding-left-md__xl,.padding-x-md__xl{padding-left:1rem !important}.margin-lg__xl{margin:1.5rem !important}.margin-top-lg__xl,.margin-y-lg__xl{margin-top:1.5rem !important}.margin-right-lg__xl,.margin-x-lg__xl{margin-right:1.5rem !important}.margin-bottom-lg__xl,.margin-y-lg__xl{margin-bottom:1.5rem !important}.margin-left-lg__xl,.margin-x-lg__xl{margin-left:1.5rem !important}.padding-lg__xl{padding:1.5rem !important}.padding-top-lg__xl,.padding-y-lg__xl{padding-top:1.5rem !important}.padding-right-lg__xl,.padding-x-lg__xl{padding-right:1.5rem !important}.padding-bottom-lg__xl,.padding-y-lg__xl{padding-bottom:1.5rem !important}.padding-left-lg__xl,.padding-x-lg__xl{padding-left:1.5rem !important}.margin-xl__xl{margin:3rem !important}.margin-top-xl__xl,.margin-y-xl__xl{margin-top:3rem !important}.margin-right-xl__xl,.margin-x-xl__xl{margin-right:3rem !important}.margin-bottom-xl__xl,.margin-y-xl__xl{margin-bottom:3rem !important}.margin-left-xl__xl,.margin-x-xl__xl{margin-left:3rem !important}.padding-xl__xl{padding:3rem !important}.padding-top-xl__xl,.padding-y-xl__xl{padding-top:3rem !important}.padding-right-xl__xl,.padding-x-xl__xl{padding-right:3rem !important}.padding-bottom-xl__xl,.padding-y-xl__xl{padding-bottom:3rem !important}.padding-left-xl__xl,.padding-x-xl__xl{padding-left:3rem !important}.margin-auto__xl{margin:auto !important}.margin-top-auto__xl,.margin-y-auto__xl{margin-top:auto !important}.margin-right-auto__xl,.margin-x-auto__xl{margin-right:auto !important}.margin-bottom-auto__xl,.margin-y-auto__xl{margin-bottom:auto !important}.margin-left-auto__xl,.margin-x-auto__xl{margin-left:auto !important}.margin-init__xl{margin:initial !important}.margin-top-init__xl,.margin-y-init__xl{margin-top:initial !important}.margin-right-init__xl,.margin-x-init__xl{margin-right:initial !important}.margin-bottom-init__xl,.margin-y-init__xl{margin-bottom:initial !important}.margin-left-init__xl,.margin-x-init__xl{margin-left:initial !important}.padding-init__xl{padding:initial !important}.padding-top-init__xl,.padding-y-init__xl{padding-top:initial !important}.padding-right-init__xl,.padding-x-init__xl{padding-right:initial !important}.padding-bottom-init__xl,.padding-y-init__xl{padding-bottom:initial !important}.padding-left-init__xl,.padding-x-init__xl{padding-left:initial !important}}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
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
        """);
}
