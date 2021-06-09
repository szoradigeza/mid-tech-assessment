/**
 * Gets the processing page
 * @param {{state: String, errorCode: String} []} data
 */
export default async function getProcessingPage(data) {
  for (let i = 0; i < data.length; i++) {
    switch (data[i].state) {
      case "processing":
          //wait 2 milisec and step next state
        await new Promise((r) => setTimeout(r, 2000));
        console.log("proc");
        break;
      case "error":
        console.log(handleError(data[i].errorCode));
        return handleError(data[i].errorCode);
      case "success":
        console.log("complete");
        return { title: "Order complete", message: null };

      default:
        break;
    }
  }
}

const handleError = (errorCode) => {
  const possibleErrors = [
    { errorCode: "NO_STOCK", message: "No stock has been found" },
    {
      errorCode: "INCORRECT_DETAILS",
      message: "Incorrect details have been entered",
    },
  ];
  let errorObj = { title: "Error page" };
  if (errorCode) {
    const error = possibleErrors.find(
      (element) => element.errorCode === errorCode
    );
    errorObj.message = error.message;
    return { errorObj };
  } else {
    errorObj.message = null;
    return errorObj;
  }
};
