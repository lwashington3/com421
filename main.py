from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl
import socketserver


def http():
	with HTTPServer(('0.0.0.0', 80), SimpleHTTPRequestHandler) as httpd:
		httpd.serve_forever()


def https():
	with HTTPServer(('0.0.0.0', 443), SimpleHTTPRequestHandler) as httpd:
		context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
		context.load_cert_chain('certs/cert.pem', 'certs/key.pem', "genericpassword!")

		httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
		httpd.serve_forever()


if __name__ == "__main__":
	from sys import argv
	if len(argv) == 2 and argv[1] == "https":
		https()
	else:
		http()
