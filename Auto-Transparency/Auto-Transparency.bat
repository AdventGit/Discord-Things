@echo off
title Auto-Transparency Discord
mode con:cols=13 lines=1
set "BaseConfig=%~dp0config.json"
set "DiscordBase=%localappdata%\DiscordPTB"
set "DiscordLaunch=%DiscordBase%\Update.exe --processStart DiscordPTB.exe"
set "DiscordFolder=%DiscordBase%\app-0.0.43\resources\app"
set "DiscordConfig=%DiscordFolder%\config.json"
del /F /Q %DiscordConfig% > NUL
copy /Y %BaseConfig% %DiscordFolder% > NUL
start /wait %DiscordLaunch%
del /F /Q %DiscordConfig% > NUL
copy /Y %BaseConfig% %DiscordFolder% > NUL
exit