'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, User, Settings, FileText, PlusCircle, Clock, Activity } from 'lucide-react'
import { supabase, Inquiry } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ name: string; email: string; company: string; phone: string } | null>(null)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])

  useEffect(() => {
    document.title = 'Dashboard | Secure Sphere'
    const load = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      if (!authUser) { router.push('/auth/login'); return }
      setUser({
        name: authUser.user_metadata?.name ?? authUser.email ?? 'User',
        email: authUser.email ?? '',
        company: authUser.user_metadata?.company ?? '',
        phone: authUser.user_metadata?.phone ?? '',
      })
      const { data: inquiryRows } = await supabase.from('inquiries').select('*').eq('user_id', authUser.id).order('created_at', { ascending: false })
      setInquiries(inquiryRows ?? [])
      setLoading(false)
    }
    load()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#070f1a' }}>
        <div className="flex items-center gap-3 text-slate-400">
          <div className="w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
          Loading dashboard...
        </div>
      </div>
    )
  }

  const stats = [
    { label: 'Total Inquiries', value: inquiries.length, icon: <FileText size={18} />, color: 'text-brand-400' },
    { label: 'In Progress', value: inquiries.filter(i => i.status === 'in-progress').length, icon: <Activity size={18} />, color: 'text-emerald-400' },
    { label: 'Pending', value: inquiries.filter(i => i.status === 'pending').length, icon: <Clock size={18} />, color: 'text-amber-400' },
  ]

  return (
    <div className="min-h-screen py-10" style={{ background: '#070f1a' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-3 border-2 border-brand-500/30"
                  style={{ background: '#f2650f' }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-base font-bold text-white">{user.name}</h2>
                <p className="text-xs text-slate-500 mt-0.5">{user.company || user.email}</p>
              </div>

              <div className="border-t border-brand-500/10 pt-5 space-y-1">
                {[
                  { href: '/dashboard/profile', icon: <User size={16} />, label: 'My Profile' },
                  { href: '/dashboard/settings', icon: <Settings size={16} />, label: 'Settings' },
                ].map(({ href, icon, label }) => (
                  <Link key={href} href={href} className="flex items-center gap-3 text-slate-400 hover:text-brand-300 hover:bg-brand-500/10 py-2 px-3 rounded-lg transition text-sm">
                    {icon} {label}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 text-slate-400 hover:text-red-400 hover:bg-red-500/5 py-2 px-3 rounded-lg transition text-sm"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-5">
            {/* Welcome */}
            <div className="rounded-xl p-7 relative overflow-hidden" style={{ background: '#0b1626' }}>

              <div className="relative z-10">
                <p className="text-brand-200 text-sm font-medium mb-1">Welcome back</p>
                <h1 className="text-3xl font-black text-white mb-1">{user.name} 👋</h1>
                <p className="text-brand-200/70 text-sm">Here's an overview of your service inquiries.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(({ label, value, icon, color }) => (
                <div key={label} className="card p-5">
                  <div className={`mb-2 ${color}`}>{icon}</div>
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Inquiries */}
            <div className="card overflow-hidden">
              <div className="px-6 py-4 border-b border-brand-500/10 flex justify-between items-center">
                <h2 className="font-bold text-white">Your Inquiries</h2>
                <Link href="/contact" className="flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-medium transition">
                  <PlusCircle size={13} /> New Inquiry
                </Link>
              </div>

              <div className="divide-y divide-brand-500/10">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="px-6 py-4 hover:bg-brand-500/5 transition">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm">{inquiry.service}</h3>
                        <p className="text-xs text-slate-500 mt-1 truncate">{inquiry.message}</p>
                        <p className="text-xs text-slate-600 mt-1.5">{inquiry.date}</p>
                      </div>
                      <span className={`ml-4 flex-shrink-0 inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                        inquiry.status === 'pending'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {inquiry.status === 'pending' ? 'Pending' : 'In Progress'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {inquiries.length === 0 && (
                <div className="px-6 py-14 text-center">
                  <FileText size={40} className="mx-auto text-brand-500/30 mb-4" />
                  <p className="text-slate-400 text-sm font-medium">No inquiries yet</p>
                  <p className="text-slate-600 text-xs mt-1 mb-4">Get in touch to start your first service request</p>
                  <Link href="/contact" className="btn-primary text-sm py-2 px-5 inline-block">
                    Create First Inquiry
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
