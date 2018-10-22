@echo off
title Auto-Logout-Transparency Discord
mode con:cols=13 lines=1
set "DataBase=%appdata%/discordptb/Local Storage"
set "BaseConfig=%~dp0config.json"
set "DiscordBase=%localappdata%\DiscordPTB"
set "DiscordLaunch=%DiscordBase%\Update.exe --processStart DiscordPTB.exe"
set "DiscordFolder=%DiscordBase%\app-0.0.43\resources\app"
set "DiscordConfig=%DiscordFolder%\config.json"
sqlite3.exe "%DataBase%/https_ptb.discordapp.com_0.localstorage" < commands.txt
del /F /Q %DiscordConfig% > NUL
copy /Y %BaseConfig% %DiscordFolder% > NUL
start /wait %DiscordLaunch%
sqlite3.exe "%DataBase%/https_ptb.discordapp.com_0.localstorage" < commands.txt
del /F /Q %DiscordConfig% > NUL
copy /Y %BaseConfig% %DiscordFolder% > NUL
exit