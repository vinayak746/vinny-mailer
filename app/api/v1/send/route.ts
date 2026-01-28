import {
  QSTASH_CURRENT_SIGNING_KEY,
  QSTASH_NEXT_SIGNING_KEY,
} from "@/app/utils/const";
import sendMail from "@/app/utils/mailer";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";

export const POST = verifySignatureAppRouter(
  async (req: Request): Promise<Response> => {
    const body = await req.json();
    const { to, subject, html, appName } = body as {
      to: string;
      subject: string;
      html: string;
      appName?: string;
    };

    try {
      await sendMail({
        to,
        subject,
        html,
        appName,
      });
    } catch (e: unknown) {
      console.error(`Emailing to ${to} failed. (app: ${appName})`);
      console.error(e);
      return new Response("Email failed", {
        status: 500,
      });
    }

    return new Response("Email Sent");
  },
  {
    currentSigningKey: QSTASH_CURRENT_SIGNING_KEY,
    nextSigningKey: QSTASH_NEXT_SIGNING_KEY,
  },
);
