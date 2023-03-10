// host = '172.16.153.122';	// hostname or IP address
// host = '172.16.153.110';	// hostname or IP address
const connection = document.location.href.split("?connection=")[1];
host = connection.split(",")[0];	// hostname or IP address
port = 443;
topic = connection.split(",")[1];		// topic to subscribe to
useTLS = true;
username = "nginx";
password = "";
// username = "jjolie";
// password = "aa";

// path as in "scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]"
//    defaults to "/mqtt"
//    may include query and fragment
//
// path = "/mqtt";
// path = "/data/cloud?device=12345";

cleansession = true;
