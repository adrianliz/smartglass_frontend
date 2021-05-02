.PHONY: all build up-remote

all: build up-remote

build:
	@ng build --prod

up-remote:
	@ssh alizaga@155.210.68.101 "rm -rf /home/alizaga/Escritorio/smartglass-frontend-builds/last/*"
	@scp -r dist/smartglass alizaga@155.210.68.101:/home/alizaga/Escritorio/smartglass-frontend-builds/last
	@ssh alizaga@155.210.68.101 "rm -rf /var/www/smartglass/* && cp -r /home/alizaga/Escritorio/smartglass-frontend-builds/last/smartglass/* /var/www/smartglass"
	@ssh -t alizaga@155.210.68.101 "sudo service apache2 restart"
