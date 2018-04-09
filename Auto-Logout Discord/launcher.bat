@echo off
title Launcher
mode con:cols=13 lines=1
set "compatloc=%~dp0"
cd %compatloc%
wscript.exe "invis_wrapper.vbs" "Auto-Logout Discord.bat"