@echo off
title Launcher
mode con:cols=13 lines=1
pushd "%~dp0"
wscript.exe "invis_wrapper.vbs" "Auto-Logout-Transparency.bat"