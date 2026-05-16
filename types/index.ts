export interface ContactForm {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export interface Site {
  created_at: string;
  id: number;
  name: string;
  description: string;
  site_name: string;
  site_image: string;
  url: string;
  tags: string[];
  hover?: boolean;
  image: string;
}

export interface Technology {
  created_at: string;
  id: number;
  name: string;
  full_name: string;
  image: string;
  type: string;
}
