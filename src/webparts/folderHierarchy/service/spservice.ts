import { getSP } from "./PnpjsConfig";
import "@pnp/sp/profiles";

export const addToCasg = async (values: any) => {
  try {
    const sp = getSP();

    return await sp.web.lists
      .getByTitle("CASG_Requests")
      .items.add({
        Customer: values.customer,
        Subject: values.subject,
        Product: values.product,
        SupportType: values.supportType,
        Contact: values.contact,
      })
      .then((res) => console.log("data submitted"))
      .catch((err) => console.error(err));
  } catch (error) {
    console.error("Error adding answer:", error);
    throw error;
  }
};

export const addToCpg = async (values: any) => {
  try {
    const sp = getSP();

    return await sp.web.lists
      .getByTitle("CPG_Requests")
      .items.add({
        Customer: values.customer,
        Subject: values.subject,
        Product: values.product,
        SupportType: values.supportType,
        Contact: values.contact,
      })
      .then((res) => console.log("data submitted"))
      .catch((err) => console.error(err));
  } catch (error) {
    console.error("Error adding answer:", error);
    throw error;
  }
};

// export const getMail = async () => {
//   try {
//     const sp = getSP();

//     const items = await sp.web.lists.getByTitle("CrmMail").items.getAll();
//     return items;
//   } catch (error) {
//     console.error("Error getting mail_id:", error);
//     throw error;
//   }
// };

// export const getUserData = async () => {
//   try {
//     const sp = getSP();

//     const details = await sp.profiles.myProperties();
//     return details;
//   } catch (error) {
//     console.error("Error getting user info:", error);
//     throw error;
//   }
// };
