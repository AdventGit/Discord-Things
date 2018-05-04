@echo off
:Evaluate
setlocal enableDelayedExpansion
for %%f in (tray-connected*.png) do (
	set "filename=%%f"
    set "tocopy=tray!filename:tray-connected=!"
    del !filename!
    echo f|xcopy /q !tocopy! !filename! > NUL
)
for %%f in (tray-deafened*.png) do (
	set "filename=%%f"
    set "tocopy=tray!filename:tray-deafened=!"
    del !filename!
    echo f|xcopy /q !tocopy! !filename! > NUL
)
for %%f in (tray-muted*.png) do (
	set "filename=%%f"
    set "tocopy=tray!filename:tray-muted=!"
    del !filename!
    echo f|xcopy /q !tocopy! !filename! > NUL
)
for %%f in (tray-speaking*.png) do (
	set "filename=%%f"
    set "tocopy=tray!filename:tray-speaking=!"
    del !filename!
    echo f|xcopy /q !tocopy! !filename! > NUL
)
exit
exit
:eof
exit