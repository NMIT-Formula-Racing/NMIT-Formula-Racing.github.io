import cherrypy
import mimetypes
import os
from jinja2 import Environment, FileSystemLoader
class Server():

	@cherrypy.expose
	def index(self):

		template = env.get_template('index.html')
		return template.render()

if __name__ == '__main__':
	''' Setting up the Server with Specified Configuration'''

	env = Environment(loader=FileSystemLoader(''))
	cherrypy.config.update({'server.socket_host': '0.0.0.0',})
	cherrypy.config.update({'server.socket_port': int(os.environ.get('PORT', '5000')),})
	conf = {
    	'/':{
    		'tools.staticdir.root': os.path.abspath(os.getcwd())
    	},
    	'/resources': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './resources'
        }
    }
cherrypy.quickstart(Server(),'/',conf)
