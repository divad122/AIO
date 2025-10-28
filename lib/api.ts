import { User, Campaign } from '../types';

// --- MOCK DATABASE ---

const MOCK_USERS: User[] = [
  {
    id: 'user-1',
    email: 'jan.kowalski@example.com',
    name: 'Jan Kowalski',
    role: 'pro',
    company_id: 'company-1',
    created_at: new Date().toISOString(),
    status: 'active',
    auth_provider: 'password',
  },
  {
    id: 'user-2',
    email: 'test@example.com',
    name: 'Użytkownik Testowy',
    role: 'admin',
    company_id: 'company-1',
    created_at: new Date().toISOString(),
    status: 'active',
    auth_provider: 'password',
  },
];

const MOCK_CAMPAIGNS: Campaign[] = [
    {
        id: 'campaign-1',
        brand_id: 'brand-1',
        name: 'Letnia Kampania Lodów',
        objective: 'sales',
        kpi: ['ROAS'],
        budget: { currency: 'PLN', value: 20000 },
        timeline: { start: '2024-08-01T00:00:00Z', end: '2024-08-31T00:00:00Z' },
        audience: { segments: ['Młodzi dorośli'], locations: ['PL'], languages: ['pl-PL'], interests: ['lato', 'słodycze'] },
        offer_cta: { offer: 'Lody XYZ -20%', cta: 'Kup teraz' },
        channels_formats: { channels: ['meta', 'tiktok'], formats: ['9x16_short', '1x1_post'] },
        inputs: { brief_file: 'url', moodboard: [], assets: [] },
        overrides: { tone: null, color_policy: null },
        status: 'published',
        created_by: 'user-1',
        created_at: '2024-07-20T10:00:00Z',
    },
     {
        id: 'campaign-2',
        brand_id: 'brand-1',
        name: 'Jesienna Kolekcja Mody',
        objective: 'awareness',
        kpi: ['CTR'],
        budget: { currency: 'PLN', value: 50000 },
        timeline: { start: '2024-09-15T00:00:00Z', end: '2024-10-15T00:00:00Z' },
        audience: { segments: ['Kobiety 25-45'], locations: ['PL'], languages: ['pl-PL'], interests: ['moda', 'zakupy online'] },
        offer_cta: { offer: 'Nowa kolekcja', cta: 'Zobacz więcej' },
        channels_formats: { channels: ['meta'], formats: ['1x1_post', 'carousel'] },
        inputs: { brief_file: 'url', moodboard: [], assets: [] },
        overrides: { tone: null, color_policy: null },
        status: 'approved',
        created_by: 'user-1',
        created_at: '2024-08-10T12:00:00Z',
    },
    {
        id: 'campaign-3',
        brand_id: 'brand-1',
        name: 'Szkic Kampanii Q4',
        objective: 'leads',
        kpi: [],
        budget: { currency: 'PLN', value: null },
        timeline: { start: '2024-10-01T00:00:00Z', end: '2024-12-31T00:00:00Z' },
        audience: { segments: [], locations: [], languages: [], interests: [] },
        offer_cta: { offer: '', cta: '' },
        channels_formats: { channels: [], formats: [] },
        inputs: { brief_file: '', moodboard: [], assets: [] },
        overrides: { tone: null, color_policy: null },
        status: 'draft',
        created_by: 'user-1',
        created_at: '2024-08-15T15:00:00Z',
    }
]


// --- MOCK API FUNCTIONS ---

const apiCall = <T>(data: T, delay = 500): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
};

export const login = async (email: string, password?: string): Promise<User | null> => {
  console.log('API: Attempting login for', email, password);
  const user = MOCK_USERS.find(u => u.email === email);
  if (user) {
    return apiCall(user);
  }
  return apiCall(null);
};

export const register = async (name: string, company: string, email: string, password?: string): Promise<User> => {
  console.log('API: Registering', name, company, email, password);
  const newUser: User = {
    id: `user-${Date.now()}`,
    email,
    name,
    role: 'pro',
    company_id: `company-${Date.now()}`,
    created_at: new Date().toISOString(),
    status: 'active',
    auth_provider: password ? 'password' : 'google',
  };
  MOCK_USERS.push(newUser);
  return apiCall(newUser);
};

export const getCampaigns = async (company_id: string): Promise<Campaign[]> => {
    console.log('API: Fetching campaigns for company', company_id);
    // In a real app, we'd filter by company_id
    return apiCall(MOCK_CAMPAIGNS);
};

export const generateCampaignConcept = async (brief: Partial<Campaign>): Promise<Campaign['concept'][]> => {
    console.log('API: Generating concepts for brief', brief);
    const mockConcepts: Campaign['concept'][] = [
        {
            title: 'Światło w Ruchu',
            description: `Minimalistyczna kampania wideo, która skupia się na grze światła i cienia na tkaninach nowej kolekcji, podkreślając ich jakość i lekkość.`,
            style: 'jasny, nowoczesny, soft tones',
            slogan: 'Poczuj lekkość. Zobacz blask.'
        },
        {
            title: 'Miejskie Echo',
            description: `Dynamiczna sesja zdjęciowa w tkance miejskiej, pokazująca, jak nowa kolekcja wpisuje się w rytm miasta i potrzeby nowoczesnej kobiety.`,
            style: 'dynamiczny, miejski, kontrastowy',
            slogan: 'Twoje miasto. Twój styl.'
        }
    ];
    return apiCall(mockConcepts, 2000); // Simulate 2-second AI thinking time
};


export const generateCampaignContent = async (concept: Campaign['concept'], feedback?: string): Promise<Campaign['content']> => {
    console.log('API: Generating content for concept', concept, 'with feedback:', feedback);

    let postText = `Odkryj nową kolekcję, gdzie światło spotyka się z ruchem. Zainspiruj się i poczuj lekkość każdego dnia. ${concept?.slogan} #NowaKolekcja #Moda2025`;
    
    if (feedback) {
        postText += `\n\n[Wersja po feedbacku: ${feedback}] - To jest tylko symulacja. W prawdziwej aplikacji, AI przetworzyłoby ten feedback i wygenerowało nowy tekst.`;
    }

    const mockContent: Campaign['content'] = {
        postText,
        imagePlaceholderUrl: `https://picsum.photos/seed/${encodeURIComponent(concept?.title || 'default')}/1080/1080?grayscale`
    };

    return apiCall(mockContent, 1500); // Simulate 1.5-second AI generation time
};

export const saveCampaign = async (campaign: Partial<Campaign>): Promise<Campaign> => {
    console.log('API: Saving campaign', campaign);
    const finalCampaign: Campaign = {
        ...campaign,
        id: `campaign-${Date.now()}`,
        status: 'draft',
        created_at: new Date().toISOString(),
        created_by: 'user-2' // Mock user
    } as Campaign; // Cast to full Campaign type

    MOCK_CAMPAIGNS.unshift(finalCampaign); // Add to the top of the list
    return apiCall(finalCampaign);
};