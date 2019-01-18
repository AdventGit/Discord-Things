from sys import platform
from os import environ
from os import getcwd as gcd
from cx_Freeze import setup, Executable

target_folder = str('')#The folder you stuck "Auto-Logout Discord.py" in

build_exe_options = {'packages':['os'],'excludes':['tkinter']}
environ['TCL_LIBRARY'] = r'C:\Program Files\Python\tcl\tcl8.6'
environ['TK_LIBRARY'] = r'C:\Program Files\Python\tcl\tk8.6'

base = None
if platform == 'win32':
    base = 'Win32GUI'

setup(name='Auto-Logout Discord',version='1.0',description='Build 0.0.46 Compliant',options={'build_exe':build_exe_options},executables=[Executable(str(str(target_folder) + str('Auto-Logout Discord.py')),base=base)])