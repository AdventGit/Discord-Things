@echo off
title Auto-Logout Discord
mode con:cols=13 lines=1
set "Discord=%localappdata%\DiscordPTB\app-0.0.41"
set "DataBase=%appdata%/discordptb/Local Storage"
sqlite3.exe "%DataBase%/https_ptb.discordapp.com_0.localstorage" < commands.txt
cd "%Discord%"
start /wait DiscordPTB.exe
sqlite3.exe "%DataBase%/https_ptb.discordapp.com_0.localstorage" < commands.txt
exit