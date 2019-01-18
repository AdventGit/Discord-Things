from sys import platform
from os import environ
from os import getcwd as gcd
from cx_Freeze import setup, Executable

build_exe_options = {'packages':['os'],'excludes':['tkinter']}
environ['TCL_LIBRARY'] = r'C:\Program Files\Python\tcl\tcl8.6'
environ['TK_LIBRARY'] = r'C:\Program Files\Python\tcl\tk8.6'

base = None
if platform == 'win32':
    base = 'Win32GUI'

setup(name='Auto-Logout Discord',version='1.0',description='Build 0.0.46 Compliant',options={'build_exe':build_exe_options},executables=[Executable('C:\\Users\\Advent\\Desktop\\Plyvel Shit\\scripts\\Auto-Logout Discord.py',base=base)])