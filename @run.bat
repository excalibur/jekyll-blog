@echo off
echo [Pre-Requirement] Makesure install NodeJS and set PATH.
echo [Pre-Requirement] Makesure install Npm and set NODE_PATH.
echo [Pre-Requirement] Makesure install Grunt.
echo [Pre-Requirement] Makesure install bower.

echo [Step 1]  set chcp to 65001
call chcp 65001
if errorlevel 1 goto error

echo [Step 2]  run grunt server task.
echo [INFO]  Please wait a moment. When you see "Waiting..." in both consoles, you can access below demo sites:
echo [INFO] http://localhost:9000
call grunt server
if errorlevel 1 goto error

goto end
:error
echo Error Happen!!
pause
exit 0

:end
exit 0