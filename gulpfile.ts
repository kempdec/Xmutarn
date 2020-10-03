import { parallel, series, task } from "gulp";

import { buildCss, buildDocs, buildJs, copyDocsDependency, delCss, delDocs, delDocsLibs, delJs, watchDocs } from "./scripts/gulp";

task("css", series(delCss, buildCss));
task("js", series(delJs, buildJs));

task("docs", series(delDocs, buildDocs));
task("docsDependency", series(delDocsLibs, copyDocsDependency));
task("cssDocs", series("css", "docsDependency"));
task("jsDocs", series("js", "docsDependency"));
task("watchDocs", watchDocs);

task("default", series(parallel("css", "js", "docs"), "docsDependency"));
