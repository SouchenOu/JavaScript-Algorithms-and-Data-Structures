/**Handle a Rejected Promise with catch
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  
});
error is the argument passed in to the reject method.

Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

 */


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
    makeServerRequest.then(result => {
        if (responseFromServer) {
            resolve("We got the data");
        }
    });
    makeServerRequest.catch(error => {
        if (responseFromServer == false) {
            reject("Data not received");
        }
    });
    console.log(error);
});