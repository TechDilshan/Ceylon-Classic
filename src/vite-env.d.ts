/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  readonly VITE_FORM_RECIPIENT_EMAIL: string;
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_FACEBOOK_URL: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_TIKTOK_URL: string;
  readonly VITE_MAP_EMBED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
