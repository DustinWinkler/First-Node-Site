import { createServer } from 'http'
import { readFile } from 'fs'

createServer(function (req,res) {
  const baseURL = 'http://' + req.headers.host + '/';
  const reqURL = new URL(req.url,baseURL);
  const paths = ['/about.html', '/contact.html', './index.html']
  let filename = ""
  if (reqURL.pathname === "/") {
    filename = "./index.html"
  } else if (!paths.includes(reqURL.pathname)) {
    filename = "./404.html"
  } else {
    filename = "." + reqURL.pathname
  }

  console.log(filename)
  console.log(reqURL.pathname)

  readFile(filename, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080)