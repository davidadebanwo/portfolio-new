export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
  project_link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}
