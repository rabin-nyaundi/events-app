export interface API {
  url?: string;
  path: string;
  body?: JSON;
}

export type Event = {
  id: Number;
  title: String;
  description: String;
  date: String;
  location: String;
  category: String;
  contact_email: String;
  contact_phone: String;
  ticket_price: Number;
  ticket_quantity: Number;
  discount: Number;
  thumbnail: String;
  created_at: String;
  updated_at: String;
};

export interface Events {
  event: Event[];
}
