from leveldb import LevelDB as ldb
from os import chdir as cd
from os.path import expandvars as expvar
from subprocess import run as spr

cd(expvar(r'%appdata%\discordptb\Local Storage'))
wldb = ldb('leveldb',create_if_missing=False)
wldb.Delete(b'_https://ptb.discordapp.com\x00\x01token')
del wldb
spr(['cmd','/c','start','/wait','',expvar(r'%localappdata%\DiscordPTB\app-0.0.47\DiscordPTB.exe')],shell=True,universal_newlines=True)
wldb = ldb('leveldb',create_if_missing=False)
wldb.Delete(b'_https://ptb.discordapp.com\x00\x01token')
del wldb