import axios from "axios";
import { RecipientsInfo } from "@/interfaces/email";
import {
  mailgunBaseUrl,
} from "@/lib/config";
import { HTMLString } from "@/interfaces/email";

const DOMAIN = "domain";
const SENDER = "tripto";
const SENDER_NAME = "TripTo";

/**
 * Sends an email thru Mailgun's API
 */

async function sendEmail(
  recipientsMap: Map<string, RecipientsInfo>,
  subject: string,
  html: HTMLString
) {
  const user = "api";
  const apiKey = process.env.MAILGUN_API_KEY || "";

  const recipientsObj = Object.fromEntries(recipientsMap);
  const recipients = JSON.stringify(recipientsObj);

  const commaDeliminatedEmails = Object.keys(recipientsObj).join(", ");

  const message = {
    from: `${SENDER_NAME} <${SENDER}>`,
    "recipient-variables": recipients,
    to: commaDeliminatedEmails,
    subject,
    html,
  };

  await axios.post(
    `${mailgunBaseUrl}/${DOMAIN}/messages`,
    {},
    {
      params: message,
      auth: {
        username: user,
        password: apiKey,
      },
    }
  );
}