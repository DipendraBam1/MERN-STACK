import { Request, Response } from "express";

const { default: axios } = require("axios");
import  Order from "../models/Order";

const orderVerification =  async (req:Request, res:Response) => {
  const base64 = req.query.token as string;

  // Decode Base64
  const decodedString = Buffer.from(base64, "base64").toString("utf8");
  const data = JSON.parse(decodedString);

  let response = await axios.get(
    `https://rc.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=${data.total_amount}&transaction_uuid=${data.transaction_uuid}`,
  );

  if (response.data.status == "COMPLETE") {
    await Order.update(
      {
        paymentStatus: "paid",
      },
      {
        where: {
          orderNo: data.transaction_uuid,
        },
      },
    );
  }

  res.send("success");
}
export default orderVerification;