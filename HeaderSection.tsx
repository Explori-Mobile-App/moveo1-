export function HeaderSection() {
  return (
    <div className="px-6 pt-12 pb-6" data-bravo="[container]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">E</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800 mb-0" data-bravo="[text]">explori</h1>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight" data-bravo="[text]">
          Discover amazing
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">experiences</span>
        </h2>
        <p className="text-slate-600" data-bravo="[text]">Find local events, hidden gems, and unforgettable adventures</p>
      </div>
    </div>
  );
}