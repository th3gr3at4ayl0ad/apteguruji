// Service Categories
export interface Puja {
  id: string;
  category_id: string | null;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Sanskar {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ShanthiService {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ShraddhService {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface YagService {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface VivahService {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface MuhuratService {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  benefits: string | null;
  procedure: string | null;
  duration: string | null;
  samagri: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

// Admin & Users
export interface UserProfile {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  role: "guruji" | "admin" | "handler";
  created_at: string;
  updated_at: string;
}

export interface Festival {
  id: string;
  title: string;
  title_mr: string | null;
  description: string | null;
  date: string;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  whatsapp_phone: string | null;
  email: string | null;
  address: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Enquiry {
  id: string;
  customer_id: string;
  service_type: string;
  service_id: string | null;
  date: string | null;
  time: string | null;
  location: string | null;
  address: string | null;
  additional_info: string | null;
  status: "नवीन" | "संपर्क केला" | "निश्चित" | "पूर्ण" | "रद्द";
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  google_maps_url: string | null;
  phone: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  title: string | null;
  caption: string | null;
  image_url: string;
  category: string | null;
  related_event_id: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SiteSettings {
  key: string;
  value: string;
  updated_at: string;
}
