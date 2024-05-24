fx_version 'cerulean'
game 'gta5'

author 'SaharaScripters'
description 'Yellow pages for NPWD Phone'
version '1.0.2'

shared_script '@ox_lib/init.lua'

client_script 'client/main.lua'

server_script 'server/main.lua'

ui_page 'web/dist/index.html'

files {
	'web/dist/index.html',
	'web/dist/**/*',
}

use_experimental_fxv2_oal 'yes'
lua54 'yes'
