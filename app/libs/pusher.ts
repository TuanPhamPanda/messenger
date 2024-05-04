import PusherServer from "pusher";
import PusherClient from "pusher-js";

const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_API_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "ap1",
  useTLS: true,
});

const pusherClient = new PusherClient(process.env.PUSHER_API_KEY!, {
  cluster: "ap1",
});

export { pusherServer, pusherClient };
