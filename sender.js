// Modified template given by Bitly API Reference: https://dev.bitly.com/api-reference
// Mozilla documentation for reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// Referenced StackOverflow posting for help: https://stackoverflow.com/questions/24546483/how-to-get-data-field-from-xhr-responsetext

// Headers with values
const header = [ 'Authorization', 'Content-Type' ];
const value = ['Bearer c6587bbba967a126151630b08a1dfe8b09a9fdbe', 'application/json'];

function getLink() {
    // Retrieve input from user
    var link = document.getElementById("long_url").value;
    var dataString = '{ "long_url": "' + link + '", "domain": "bit.ly", "group_guid": "Bm147SyNhAU" }';
    // Package and POST information
    const Http = new XMLHttpRequest();
    const url='https://api-ssl.bitly.com/v4/shorten';
    Http.open("POST", url);
    Http.setRequestHeader(header[0], value[0]);
    Http.setRequestHeader(header[1], value[1]);
    Http.send(dataString);
    // Establish listener to display link
    Http.onreadystatechange = (e) => {
        // Parse JSON object
        var data = Http.responseText;
        var jsonResponse = JSON.parse(data);
        console.log(jsonResponse["link"]);
        // Display
        document.getElementById("new_link").innerHTML = jsonResponse["link"];
    }
}
