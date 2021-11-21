import jsSHA from "jssha";

export const getAuthorizationHeader = () => {
  let AppID = process.env.REACT_APP_ID;
  let AppKey = process.env.REACT_APP_KEY;
  let GMTString = new Date().toGMTString();
  // let GMTString = new Date().toUTCString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};
