
export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  created_at: string;
  is_active: boolean;
  user_id?: string;
  updated_at?: string;
}

export interface ReferenceDocument {
  id: string;
  file_name: string;
  file_path: string;
  text_content?: string;
  processed?: boolean;
}

export interface DocumentSection {
  title: string;
  content: string;
  pageNumber: number;
  articleNumber?: string;
  sectionId?: string;
}
