using KempDec.Xmutarn;
using KempDec.Xmutarn.Core.Tools;
using System.Diagnostics;

var sw = Stopwatch.StartNew();

CSSFileWriter.WriteToFiles<XmutarnCSS>(path: "src/Xmutarn/wwwroot/css", solutionAsRootPath: true);

Console.WriteLine($"Executado em {sw.ElapsedMilliseconds}ms!");
