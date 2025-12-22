export interface Novel { id: string; title: string; author: string; description: string; cover: string; category: string; rating: number; chapters: Chapter[]; views: string; isHot?: boolean; }
export interface Chapter { id: number; title: string; content: string; }
export interface AppSettings { name: string; description: string; minWithdrawal: number; coinRate: number; }
export interface UserWallet { coins: number; rupiah: number; history: Transaction[]; }
export interface Transaction { id: string; type: 'READ' | 'CHECKIN' | 'INVITE' | 'WITHDRAW'; amount: number; date: string; title: string; status?: 'PENDING' | 'APPROVED' | 'REJECTED'; accountDetails?: string; method?: string; }
export interface User { username: string; email: string; isLoggedIn: boolean; dailyCheckIn: string[]; isAdmin?: boolean; invitedCount?: number; }
export interface ProgressData { chapterId: number; percentage: number; lastUpdated: number; }
export type ProgressMap = Record<string, ProgressData>;
export type ViewState = 'SPLASH' | 'AUTH' | 'HOME' | 'LIBRARY' | 'DISCOVER' | 'PROFILE' | 'WALLET' | 'MISSION' | 'ADMIN' | 'ABOUT' | 'INVITE';
