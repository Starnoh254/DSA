// // https://www.npmjs.com/package/zeptomail

// // For ES6
// // import { SendMailClient } from "zeptomail";

// // For CommonJS
// const { SendMailClient } = require("zeptomail");

// const url = "https://api.zeptomail.com/v1.1/email/template";
// const token =
//   "Zoho-enczapikey wSsVR61//EP0C6wsyTX4Luw4mltdU1ijHEV0ilqj6SKuSKvL98dvlhDODVL0SvBNR248EzYbor96zBsAgToOidokn1AIDCiF9mqRe1U4J3x17qnvhDzMV2VYmhWIK4oAzw5imWFpEcwl+g==";

// let client = new SendMailClient({ url, token });

// client
//   .sendMail({
//     from: {
//       address: "noreply@linkarp.com"
//     },
//     to: [
//       {
//         email_address: {
//           address: "stanojohn697@gmail.com",
//           name: "Starnoh",
//         },
//       },
//     ],
//     template_key:
//       "2d6f.6ec28a70bb639512.k1.49b22be0-23de-11ef-9402-52540064429e.18feca6dd9e",
//     merge_info: {
//       sender: {
//         first_name: "Starnoh",
//       },
//       event: {
//         banner: "banner_value",
//         title: "More Gifts",
//       },
//       user: {
//         first_name: "John",
//       },
//       url: "https://www.youtube.com",
//     },
//   })
//   .then((resp) => {
//     console.log("success");
//     console.log(resp);
//   })
//   .catch((error) => {
//     console.log("error");
//     console.log(error);
//   });

  
// For ES6, set type: "module" in package.json.
// import { SendMailClient } from "zeptomail";

// For CommonJS
const { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email/template";
const token =
  "Zoho-enczapikey wSsVR61//EP0C6wsyTX4Luw4mltdU1ijHEV0ilqj6SKuSKvL98dvlhDODVL0SvBNR248EzYbor96zBsAgToOidokn1AIDCiF9mqRe1U4J3x17qnvhDzMV2VYmhWIK4oAzw5imWFpEcwl+g==";

let client = new SendMailClient({url, token});

client
  .sendMail({
    from: {
      address: "noreply@linkarp.com",
      name : "Linkarp"
    },
    to: [
      {
        email_address: {
          address: "stajohn697@gmail.com",
          name: "Starnoh",
        },
      },
    ],
    subject : "New Gift",
    template_key:
      "2d6f.6ec28a70bb639512.k1.33379fd0-23de-11ef-9402-52540064429e.18feca64a4d",
    merge_info: {
      sender: {
        first_name: "Starnoh",
      },
      event: {
        banner: "banner_value",
        title: "title_value",
      },
      user: {
        first_name: "John",
      },
      url: "https://www.youtube.com",
    },
  })
  .then((resp) => console.log("success"))
  .catch((error) => {
    console.log("error");
    console.log(error.error.details);
  });