@echo off
echo [Pre-Requirement] Makesure install NodeJS and set PATH.
echo [Pre-Requirement] Makesure install Npm and set NODE_PATH.
echo [Pre-Requirement] Makesure install Grunt.
echo [Pre-Requirement] Makesure install bower.

echo [Step 1]  set chcp to 65001
call chcp 65001
if errorlevel 1 goto error

echo [Step 2]  run jekyll server task.
echo [INFO]  Please wait a moment. When you see "Server running..." in both consoles, you can access below demo sites:
echo [INFO] http://localhost:4000
call jekyll server -w
if errorlevel 1 goto error

goto end
:error
echo Error Happen!!
pause
exit 0

:end
exit 0