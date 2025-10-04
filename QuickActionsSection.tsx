import { Page } from './Router';

interface QuickActionsSectionProps {
  onNavigate?: (page: Page, data?: any) => void;
}

export function QuickActionsSection({ onNavigate }: QuickActionsSectionProps) {
  const actions = [
    {
      title: "AI Planner",
      subtitle: "Smart itineraries",
      icon: "🤖",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Experiences",
      subtitle: "Local adventures",
      icon: "⚡",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Connect",
      subtitle: "Meet travelers",
      icon: "👥",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Discover",
      subtitle: "Hidden gems",
      icon: "📱",
      gradient: "from-orange-500 to-pink-600"
    }
  ];

  return (
    <div className="px-6 mb-8" data-bravo="[container]">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-1" data-bravo="[text]">Quick Actions</h2>
        <p className="text-sm text-slate-600" data-bravo="[text]">Everything you need in one tap</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${action.gradient} rounded-3xl p-6 text-white cursor-pointer overflow-hidden transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl`}
            onClick={() => {
              if (action.title === 'AI Planner') onNavigate?.('Planner');
              else if (action.title === 'Experiences') onNavigate?.('Map');
              else if (action.title === 'Connect') onNavigate?.('AddPost');
              else if (action.title === 'Discover') onNavigate?.('Map');
            }}
            data-bravo="[button]"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl mb-3">{action.icon}</div>
              <h3 className="font-semibold mb-1" data-bravo="[text]">{action.title}</h3>
              <p className="text-xs text-white/80" data-bravo="[text]">{action.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}