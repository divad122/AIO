export interface User {
  id: string;
  email: string;
  name: string;
  role: 'creator' | 'pro' | 'enterprise' | 'studio_plus' | 'admin';
  company_id: string;
  created_at: string;
  status: 'active' | 'invited' | 'suspended';
  auth_provider: 'password' | 'google' | 'microsoft' | 'sso';
}

export interface Brand {
  id: string;
  company_id: string;
  name: string;
  industry: string[];
  tagline: string;
  logo: { light: string; dark: string };
  colors: { primary: string; secondary: string; accents: string[] };
  typography: { heading: string; body: string };
  ideology: {
    mission: string;
    vision: string;
    values: string[];
    personality: string;
    target_audience: string;
  };
  legal: { ai_processing_allowed: boolean; c2pa: 'enforced' | 'optional' };
  created_by: string;
  created_at: string;
}

export interface Campaign {
  id: string;
  brand_id: string;
  name: string;
  objective: 'awareness' | 'sales' | 'leads' | 'engagement' | 'event' | 'launch' | 'recruitment' | string;
  kpi?: ('CTR' | 'ROAS')[];
  budget?: { currency: string; value: number | null };
  timeline?: { start: string; end: string };
  audience?: { segments?: string[]; locations?: string[]; languages?: string[]; interests?: string[] };
  offer_cta: { offer: string; cta: string };
  channels_formats?: { channels: string[]; formats: string[] };
  inputs?: { brief_file?: string; moodboard?: string[]; assets?: string[] };
  overrides?: { tone: string | null; color_policy: string | null };
  status: 'draft' | 'generating' | 'review' | 'approved' | 'scheduled' | 'published' | 'paused';
  created_by: string;
  created_at: string;
  // Fields for the creation process
  productDescription?: string;
  targetAudience?: string;
  concept?: {
    title: string;
    description: string;
    style: string;
    slogan: string;
  };
  content?: {
    postText: string;
    imagePlaceholderUrl: string;
  };
}

export interface Asset {
  id: string;
  campaign_id: string;
  type: 'image' | 'video' | 'audio' | 'copy';
  variant: 'A' | 'B' | 'C';
  quality: 'std' | 'hq' | '4k';
  duration_sec?: number;
  cost_estimate: { credits: number; pln: number };
  storage_url: string;
  c2pa_manifest: string;
  version: number;
  status: 'rendering' | 'ready' | 'approved' | 'rejected' | 'scheduled' | 'published';
  created_at: string;
}

export interface Feedback {
  id: string;
  asset_id: string;
  author_id: string;
  message: string;
  action: 'iterate' | 'replace_voice' | 'replace_music' | 'change_shot' | 'color_grade';
  applied: boolean;
  created_at: string;
}

export interface PublicationTask {
  id: string;
  asset_id: string;
  channel: 'meta' | 'tiktok' | 'linkedin' | 'youtube';
  schedule_time: string;
  caption: string;
  status: 'queued' | 'posted' | 'failed';
  external_id: string | null;
  created_at: string;
}

export interface AnalyticsSnapshot {
  id: string;
  campaign_id: string;
  channel: 'meta' | 'tiktok';
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
    cpc: number;
    roas: number;
    engagement_rate: number;
  };
  period: { from: string; to: string };
  insights_ai: { type: 'recommendation' | 'observation'; text: string }[];
  created_at: string;
}

export interface Billing {
  company_id: string;
  plan: 'creator' | 'pro' | 'enterprise' | 'studio_plus';
  credits_balance: number;
  overage_pln: number;
  updated_at: string;
}