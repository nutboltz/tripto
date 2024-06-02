import axios from "axios";
import { RecipientsMap } from "@/interfaces/email";
import {
  mailgunBaseUrl,
} from "@/lib/config";
import { HTMLString } from "@/interfaces/email";

const DOMAIN = "domain";
const SENDER = "TripTo";
const SENDER_NAME = "TripTo";

/**
 * Sends an email thru Mailgun's API
 */

export async function sendEmail(
  recipients: string[], // list of emails
  subject: string,
  html: HTMLString
) {
  const user = "api";
  const apiKey = process.env.MAILGUN_API_KEY || "";

  const commaDeliminatedEmails = recipients.join(",");

  const message = {
    from: `${SENDER_NAME} <${SENDER}>`,
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