import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false,
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className={cn(
        'font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
        light ? 'text-primary-foreground' : 'text-foreground'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-primary-foreground/80' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        'w-20 h-1 bg-secondary rounded-full mt-6',
        centered && 'mx-auto'
      )} />
    </div>
  );
};
