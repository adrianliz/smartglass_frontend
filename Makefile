.PHONY: build apache2-up-remote docker-up-remote docker-down-remote logs

build:
	@ng build --prod

apache2-up-remote:
	@ssh alizaga@155.210.68.101 "rm -rf /home/alizaga/Escritorio/smartglass-frontend-builds/last/*"
	@scp -r dist/smartglass alizaga@155.210.68.101:/home/alizaga/Escritorio/smartglass-frontend-builds/last
	@ssh alizaga@155.210.68.101 "rm -rf /var/www/smartglass/* && cp -r /home/alizaga/Escritorio/smartglass-frontend-builds/last/smartglass/* /var/www/smartglass"
	@ssh -t alizaga@155.210.68.101 "sudo service apache2 restart"

docker-up-remote:
	@ssh alizaga@155.210.68.101 "docker pull adrianliz/smartglass-frontend:main && docker run -p 80:80 --name smartglass-frontend -t adrianliz/smartglass-frontend:main"

docker-down-remote:
	@ssh alizaga@155.210.68.101 "docker stop smartglass-frontend && docker rm smartglass-frontend"

logs:
	@ssh alizaga@155.210.68.101 "docker logs smartglass-frontend" > logs.txt
