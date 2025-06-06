export interface Message {
  id: string;
  text: string;
  sender: "admin" | "user";
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  newMessage: string;
  isTyping: boolean;
}
