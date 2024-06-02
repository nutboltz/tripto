export type HTMLString = string;

export type RecipientsInfo = {
    firstName: string;
    id: number;
  };
  
  export type emailOptions = {
    to: string[];
    cc?: string[];
    subject: string;
    textMessage?: string;
    htmlMessage: HTMLString;
    threadId?: string;
    // for replying to a thread
    references?: string;
    inReplyTo?: string;
  };
  