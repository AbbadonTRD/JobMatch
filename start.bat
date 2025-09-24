@echo off
echo Installing CoW DAO Landing Page Dependencies...
echo.

REM Check if node_modules exists
if not exist node_modules (
    echo Installing npm packages...
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies.
        echo Please check your internet connection and try again.
        echo You can also try: npm cache clean --force
        pause
        exit /b 1
    )
) else (
    echo Dependencies already installed.
)

echo.
echo Starting development server...
echo Open http://localhost:3000 in your browser once the server starts.
echo Press Ctrl+C to stop the server.
echo.

call npm start

pause
