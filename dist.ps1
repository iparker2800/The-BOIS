New-Item -ItemType Directory -Path ./dist 
New-Item -ItemType Directory -Path ./dist/node_modules
New-Item -ItemType Directory -Path ./dist/public
New-Item -ItemType Directory -Path ./dist/views

Copy-Item -Path ./node_modules/* -Destination dist/node_modules -Recurse
Copy-Item -Path ./public/* -Destination dist/public -Recurse
Copy-Item -Path ./views/* -Destination dist/views -Recurse
Copy-Item -Path ./index.js -Destination dist
Copy-Item -Path ./run_server.ps1 -Destination dist