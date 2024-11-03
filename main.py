from http.server import HTTPServer, SimpleHTTPRequestHandler
from ssl import SSLContext, PROTOCOL_TLS_SERVER


class Handler(SimpleHTTPRequestHandler):
	def __init__(self, *args, **kwargs):
		super().__init__(*args, directory="public_html", **kwargs)


def http():
	with HTTPServer(('', 80), Handler) as httpd:
		httpd.serve_forever()


def https():
	with HTTPServer(('', 443), Handler) as httpd:
		context = SSLContext(PROTOCOL_TLS_SERVER)
		context.load_cert_chain('certs/cert.pem', 'certs/key.pem', "genericpassword!")

		httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
		httpd.serve_forever()


if __name__ == "__main__":
	from sys import argv
	if len(argv) == 2 and argv[1] == "https":
		https()
	else:
		http()
