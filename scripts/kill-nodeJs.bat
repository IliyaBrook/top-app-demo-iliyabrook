@echo off
cmd /c taskkill /f /im node.exe

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    cmd /c taskkill /f /pid %%a
)