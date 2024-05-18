fx_version 'cerulean'
game 'gta5'

description 'A simple yellow pages script for NPWD Phone'
version '1.0.0'

shared_script '@ox_lib/init.lua'

client_script 'client/main.lua'

server_script 'server/main.lua'

ui_page 'web/dist/index.html'

files {
	'web/dist/index.html',
	'web/dist/**/*',
}

lua54 'yes'
