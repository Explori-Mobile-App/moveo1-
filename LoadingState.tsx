import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingState({ message = 'Loading...', size = 'md' }: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-8" data-bravo="[container]">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-[#ff6b35] mb-3`} />
      <p className="text-[#64748b] text-sm" data-bravo="[text]">{message}</p>
    </div>
  );
}

export function PageLoadingState() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdfcfb]">
      <LoadingState message="Loading explori..." size="lg" />
    </div>
  );
}