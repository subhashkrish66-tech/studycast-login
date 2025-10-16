@echo off
echo Starting StudyCast Login System...
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting server...
echo Visit http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.
call npm start
pause
